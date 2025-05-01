export function searchPlants(name) {
  return new Promise((resolve, reject) => {
    my.request({
      url: `https://perenual.com/api/species-list?key=sk-t22Q68138dae021de10161&q=${name}`,
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.data) {
          resolve(res.data.data.slice(0, 5)); // Top 5 results
        } else {
          reject();
        }
      },
      fail: reject
    });
  });
}
