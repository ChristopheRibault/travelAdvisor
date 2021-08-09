import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key': 'b62414198cmsh8145cdb62058f83p1374d5jsn533246be6819',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error)
  }
}
