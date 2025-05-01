import { searchPlants } from '../../utils/plantApi'; // Assuming you have this helper function

Page({
  data: {
    query: '',
    results: []
  },

  onInput(e) {
    console.log('Input event:', e.detail.value);
    this.setData({
      query: e.detail.value
    });
  },

  searchPlant() {
    const query = this.data.query.trim();

    if (!query) {
      my.alert({
        title: 'Input needed',
        content: 'Please enter the name of a plant.'
      });
      return;
    }

    console.log('Search button clicked with query:', query);

    searchPlants(query)
      .then((data) => {
        this.setData({
          results: data
        });
      })
      .catch(() => {
        my.alert({
          title: 'Error',
          content: 'Failed to fetch plant data.'
        });
      });
  },

  goToInfo() {
    my.navigateTo({
      url: '/pages/info/info'
    });
  }
});


  
