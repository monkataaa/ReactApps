const appKey = 'kid_ryIt-hwz7'
const appSecret = '18752fdf599540dcba032d8525ff341f'
const hostUrl = 'https://baas.kinvey.com'

let reqHandler = {
    login : payload => {
        return   fetch(`${hostUrl}/user/${appKey}/login`, {
            method: "POST",
            headers: {
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((response) => {
            return response.json()
        })
    },
    register : payload => {
      return    fetch(`${hostUrl}/user/${appKey}`, {
        method: "POST",
        headers: {
            Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        return response.json()
    })
    },
    pullPosts : () => {
        console.log('durpam postovete');
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`, {
            method: "GET",
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
            }
        }).then(res => {return res.json()})
    },
    createPost : payload => {
        return fetch(`${hostUrl}/appdata/${appKey}/posts`, {
            method : 'POST',
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(payload)
        }).then((response) => {
            return response.json()
        })
    },
    detailedPost : postId => {
        return fetch(`https://baas.kinvey.com/appdata/${appKey}/posts/${postId}`,{
            headers: {
                Authorization: 'Kinvey ' + localStorage.getItem('token'),
            }
        }).then(detailedPost => {return detailedPost.json()})
    }
}

export default reqHandler