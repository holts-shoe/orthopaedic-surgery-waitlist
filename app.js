// request is deprecated, should use axios
const axios = require("axios");

function get_waitlist_data(gps_coordinates, page, modality_id, modality_type_id, wait_type) {
    axios({
        method: 'get',
        url: `https://or.hqontario.ca/Surgical/wtsurgicaldata/EN/adult/${gps_coordinates[0]}/${gps_coordinates[1]}/${page}/${modality_id}/${modality_type_id}/${wait_type}`
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));

}

gps_coordinates = ['44.3400199','-76.6132771']
page = 1
modality_id = 2
modality_type_id = 2
wait_type = 1

// get_waitlist_data(gps_coordinates, page, modality_id, modality_type_id, wait_type);