<template>
    <div class="chart__container">
        <canvas id="chart" width="550" height="400"></canvas>
    </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js';
import moment from 'moment';

export default {
    props: {
        country: {
            type: String,
            default: null,
        },
        chartType: {
            type: String,
            default: 'bar',
        },
        everyN: {
            type: Number,
            default: 100,
        },
        dateRange: {
            type: Object,
            default: () => {
                return {
                    start: '',
                    end: ''
                }                
            }
        }
    },
    data() {
        return {
            data: {
                arrNewConfirmed: [],
                arrNewDeaths: [],
                arrNewRecovered: [],
                arrTotalConfirmed: [],
                arrTotalDeaths: [],
                arrTotalRecovered: [],
                arrTotalActive: [],
            },
            timeline: [],
            chartObj: null,
            numberEntries: 100,
            apiDateRange: '',
            fontSize: 12,
            screenWidth: null,
        }
    },
    mounted() {
        if( this.country != 'world' ) {
            this.getDataByCountry();
        }else {
            this.getDataWorldTotal();
        }
        
        this.setApiDateRange();
        this.setFontSize();        
    },
    watch: {
        everyN(nv) {
            this.numberEntries = nv;
            this.resetChartByCountry();
        },
        'dateRange.start'() {
            this.setApiDateRange();
            this.resetChartByCountry();
        },
        country() {
            this.resetChartByCountry();
        }
    },
    methods: {
        setFontSize() {
            this.screenWidth = screen.width;
            switch(true) {
                case this.screenWidth >= 3840:
                    this.fontSize = 28;
                break;

                case this.screenWidth >= 2560:
                    this.fontSize = 18;
                break;

                default:
                    this.fontSize = 12;
            }
        },
        async getDataWorldTotal() {
            const stats = await axios.get( 'https://api.covid19api.com/world/total' );

            this.data.arrTotalConfirmed.push(stats.data.TotalConfirmed);
            this.data.arrTotalDeaths.push(stats.data.TotalDeaths);
            this.data.arrTotalRecovered.push(stats.data.TotalRecovered);
            this.data.arrTotalActive.push( (stats.data.TotalConfirmed - stats.data.TotalRecovered - stats.data.TotalDeaths) );
   
            this.renderChart(this.chartType, ['Worldwide Stats']);

        },
        async getDataByCountry() {            
            const ip = await axios.get('https://api.ipify.org');
            const geolocation = await axios.get('https://geo.ipify.org/api/v1?apiKey=at_u4q2r5FqJXtoRzApieK9G8vy2ynhx&ipAddress='+ip.data);
            
            let country = ( this.country ? this.country : geolocation.data.location.country );
            
            const stats = await axios.get( 'https://api.covid19api.com/total/country/' + country.toLowerCase() + this.apiDateRange );
            
            stats.data.forEach( (d, i, r) => {
                let date = moment(d.Date, 'YYYY-MM-DD').format('MM/DD');
                //store every 30th entry only so the chart's not so cramped
                if( ((i == 0 || i == (r.length - 1)) || (i % this.numberEntries == 0)) ) {  
                    this.timeline.push(moment(date).format('MMM DD'));
                    this.data.arrTotalConfirmed.push(d.Confirmed);
                    this.data.arrTotalRecovered.push(d.Recovered);
                    this.data.arrTotalDeaths.push(d.Deaths);
                    this.data.arrTotalActive.push((d.Confirmed - d.Recovered - d.Deaths));
                }
            });
            this.renderChart(this.chartType, this.timeline);
        },
        renderChart(chartType, labels) {
            let ctx = document.querySelector('#chart');
            let fill = (chartType == 'bar') ? true : false;

            this.chartObj = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Total Confirmed Cases',
                        data: this.data.arrTotalConfirmed,
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',
                        fill: fill,
                        backgroundColor: [
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: 'Total Recovered',
                        data: this.data.arrTotalRecovered,
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',
                        fill: fill,
                        backgroundColor: [
                            'rgba(75, 192, 192, 1)',
                        ],                        
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                        ],                        
                        borderWidth: 3
                    },
                    {
                        label: 'Total Deaths',
                        data: this.data.arrTotalDeaths,
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',                        
                        fill: fill,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],                    
                        borderWidth: 3
                    },
                    {
                        label: 'Total Active Cases',
                        data: this.data.arrTotalActive,
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',                        
                        fill: fill,
                        backgroundColor: [
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderColor: [
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 3
                    }],
                },
                options: {
                    // elements: {
                    //     point:{
                    //         radius: 0
                    //     }
                    // },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontSize: this.fontSize,
                        }
                    },
                    tooltips: {
                        callbacks: {
                            labels: (v) => {
                                return this.formattedNumber(v);
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                callback: (v) => {
                                    return this.formattedNumber(v);
                                }
                            }
                        }]
                    },
                    animation: {
                        easing: 'easeInOutSine',
                    }
                }
            });
        }, //renderchart
        formattedNumber(number) {
            return number.toLocaleString('en-US');
        },
        resetChartByCountry() {
            this.chartObj.destroy();
            this.timeline = [];
            this.data.arrTotalConfirmed = [];
            this.data.arrTotalRecovered = [];
            this.data.arrTotalDeaths = [];
            this.data.arrTotalActive = [];
            this.getDataByCountry();
        },
        setApiDateRange() {
            if( this.dateRange.start == '' ) {
                this.apiDateRange = '';
            }

            if( this.dateRange.start != '' ) {
                this.apiDateRange = `?from=${moment(this.dateRange.start).format('YYYY-MM-DD')}T00:00:01Z&to=${moment().format('YYYY-MM-DD')}T00:00:01Z`;
            }   

            if( this.dateRange.start != '' && this.dateRange.end != '' ) {
                this.apiDateRange = `?from=${moment(this.dateRange.start).format('YYYY-MM-DD')}T00:00:01Z&to=${moment(this.dateRange.end).format('YYYY-MM-DD')}T00:00:01Z`;
            }
        }
    }
}
</script>

<style lang="scss">
.chart__container {
    position: relative;
    background-color: #FFF;
}
</style>