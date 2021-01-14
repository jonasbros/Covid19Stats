<template>
  <div class="home">
    <router-link to="/">
      <h1 class="main-header">COVID19 STATS TRACKER</h1>
    </router-link>

    <Search />

    <div class="world-stats__header">
        <h1>Worldwide Stats</h1>
        <h2>As of {{ date }}</h2>
    </div>

    <div class="world-stats__container">
      <div class="stat">
        <h2>Confirmed</h2>
        <span>{{ stats.TotalConfirmed.toLocaleString('en-US') }}</span>
      </div>
      <div class="stat">
        <h2>Recovered</h2>
        <span>{{ stats.TotalRecovered.toLocaleString('en-US') }}</span>
      </div>
      <div class="stat">
        <h2>Deaths</h2>
        <span>{{ stats.TotalDeaths.toLocaleString('en-US') }}</span>
      </div>
      <div class="stat">
        <h2>Active</h2>        
        <span>{{ stats.TotalActive.toLocaleString('en-US') }}</span>
      </div>
    </div>

    <div class="chart__container">
      <Chart :country="'world'" :chartType="'bar'"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      stats: {
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0,
        TotalActive: 0
      },
    }
  },
  computed: {
    date() {
      return moment().format('MMMM DD, YYYY');
    }
  },
  mounted() {
    this.getStats();
  },
  methods: {
    async getStats() {
      let stats = await axios.get('https://api.covid19api.com/world/total');

      this.stats.TotalConfirmed = stats.data.TotalConfirmed;
      this.stats.TotalDeaths = stats.data.TotalDeaths;
      this.stats.TotalRecovered = stats.data.TotalRecovered;
      this.stats.TotalActive = stats.data.TotalConfirmed - stats.data.TotalRecovered - stats.data.TotalDeaths;
    },
  }
}

</script>

<style lang="scss">
.main-header {
  font-weight: 900;  
  color: #FFF;
  margin: 0 0 8px !important;

  //MAX WIDTH
  @media only screen and (max-width: 600px) {
    line-height: 1.1;
  }
}

.home {
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
}

.world-stats__header, .main-header {
  font-size: 64px;
  text-align: center;
  margin-top: 48px;
  text-transform: uppercase;

  @media only screen and (max-width: 414px) {
    font-size: 38px;
    margin-top: 24px;
  }

  @media only screen and (min-width: 1920px) {
    // font-size: 92px;
    // margin-top: 48px;
  }

  @media only screen and (min-width: 2560px) {
    font-size: 92px;
    margin-top: 48px;
  }

  @media only screen and (min-width: 3840px) {
    font-size: 122px;
    margin-top: 48px;
  }
  
  h1, h2 {
    font-weight: 900;  
    color: #FFF;

    @media only screen and (max-width: 750px) {
      line-height: 1.1;
    }
  }

  h2 {
    margin-top: -24px;
    font-size: 32px;

    @media only screen and (max-width: 414px) {
      font-size: 22px;
      margin-top: 0 !important;
    }

    @media only screen and (max-width: 375px) {
      margin-top: 12px !important;
    }

    @media only screen and (max-width: 750px) {
      margin-top: 24px;
    }

    @media only screen and (min-width: 3840px) {
      font-size: 48px;
    }
  }
}

.world-stats__container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: center;
  margin: 48px 0;

  @media only screen and (max-width: 375px) {
    padding: 0 32px;
    margin: 48px 0 24px 0;
  }

  @media only screen and (min-width: 414px) {
    margin: 28px 0;
  }
  
  @media only screen and (max-width: 800px) {
    justify-content: space-around;
  }

  .stat {
    flex: 0 0 25%;

    @media only screen and (max-width: 800px) {
      margin-bottom: 25px;
    }
  }

  h2 {
    font-size: 36px;
    color: #ffeb00;
    font-weight: 900;
    line-height: 1.2em;
    letter-spacing: 0.03em;

    @media only screen and (max-width: 375px) {
      font-size: 38px;
    }

    @media only screen and (min-width: 414px) {
      font-size: 28px;
    }

    @media only screen and (min-width: 2560px) {
      font-size: 48px;
    }

    @media only screen and (min-width: 3840px) {
      font-size: 64px;
    }
  }

  span {
    font-size: 28px;
    color: #FFF;
    font-weight: 900;

    @media only screen and (max-width: 375px) {
      font-size: 32px;
    }


    @media only screen and (min-width: 414px) {
      font-size: 22px;
    }

    @media only screen and (min-width: 2560px) {
      font-size: 40px;
    }

    @media only screen and (min-width: 3840px) {
      font-size: 56px;
    }
  }
}

.chart__container {
  margin-bottom: 60px;
  border-radius: 3px;
}
</style>