<template>
  <div class="country">
    <router-link to="/">
      <h1 class="main-header">COVID19 STATS TRACKER</h1>
    </router-link>

    <Search />
    <h2>Statistics for {{ countryName }}</h2>
    <input type="date" ref="calendar">
    <select name="everyn-entry" class="everyn-select" v-model="everyN">
      <option value="1">Show All Entries</option>
      <option value="50">Show Every 50 Entries</option>
      <option value="100">Show Every 100 Entries</option>
      <option value="150">Show Every 150 Entries</option>
      <option value="200">Show Every 200 Entries</option>
      <option value="300">Show Every 300 Entries</option>
    </select>
    <div class="chart__container">
      <Chart :country="$route.params.slug" :chartType="'line'" :everyN="parseInt(everyN)" :dateRange="dateRange"/>
    </div>
  </div>
</template>

<script>
import bulmaCalendar from 'bulma-calendar';
import moment from 'moment';

import Chart from '@/components/Chart';
import Search from '@/components/Search';


export default {
  components: [
    Chart,
    Search,
  ],
  data() {
    return {
      everyN: 100,
      dateRange: {
        start: '',
        end: '',
      }
    }
  },
  mounted() {
    const calendar = bulmaCalendar.attach(this.$refs.calendar, {
      color: 'info',
      isRange: true,
      startDate: moment('20200101'),
      endDate: moment().format('YYYYMMDD'),
      maxDate: moment().format('YYYYMMDD'),
      labelFrom: 'From',
      labelTo: 'To',
    })[0];

    calendar.on('select', (datepicker) => {
      this.dateRange.start = datepicker.data.startDate;
      this.dateRange.end = datepicker.data.endDate;
    });

    document.querySelector('.datetimepicker-clear-button').addEventListener('click', () => {
      this.dateRange.start = '';
      this.dateRange.end = '';
    });
  },
  computed: {
    countryName() {
      return this.$route.params.countryName;
    }
  }
}

</script>

<style lang="scss">
@import '~bulma-calendar/dist/css/bulma-calendar.min.css';

.country {
  width: 960px;
  margin: 0 auto;
  //MAX
  @media only screen and (max-width: 375px) {
    width: 300px;
  }


  @media only screen and (min-width: 414px) {
    width: 370px;
  }

  @media only screen and (min-width: 600px) {
    width: 540px;
  }

  @media only screen and (min-width: 768px) {
    width: 680px;
  }

  @media only screen and (min-width: 1024px) {
    width: 900px;
  }

  @media only screen and (min-width: 2560px) {
    width: 1440px;
  }

  @media only screen and (min-width: 3840px) {
    width: 2160px;
  }
  
  .main-header {
    font-size: 64px;
    font-weight: 900;  
    color: #FFF;
    margin: 0 0 8px !important;
  }

  h2 {
    font-size: 48px;
    font-weight: 900;
    color: #FFF;
    margin: 32px 0 16px;
  }

  .everyn-select {
    padding: 4px 6px;
    margin-bottom: 16px;
  }
}

.chart__container {
  position: relative;
}

.datetimepicker-dummy {
  background-color: #FFF;
  margin-bottom: 16px;
}

.datetimepicker-clear-button {
  transform: translateY(-12%) rotate(45deg) !important;
}
</style>