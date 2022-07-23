// request is deprecated, should use axios
const axios = require("axios");

function get_waitlist_data() {
    axios({
        method: 'get',
        url: 'https://or.hqontario.ca/Surgical/wtsurgicaldata/EN/adult/44.2311717/-76.4859544/2/2/2/1'
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
    return response;
}

get_waitlist_data();