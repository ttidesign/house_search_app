import axios  from "axios";
export const baseUrl='https://bayut.p.rapidapi.com'



export const fetchApi = async (url) =>{
const {data} = await axios.get((url), {
	headers: {
		'x-rapidapi-host': 'bayut.p.rapidapi.com',
		'x-rapidapi-key': '651f129c5dmsh77b3f9006c2b46fp169f6ajsn82622810010b',
	},
});
return data
}