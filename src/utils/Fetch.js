import axios from 'axios'

export const fetchData = async (urls) => {
  try {
    const response = await Promise.all(
      urls.map(url => axios.get(url).then(res => res.data))
    )
    return response;
  } catch (error) {
    console.log('error', error)
  }
}