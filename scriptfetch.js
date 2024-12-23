// function fetchUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('User data received'), 1000);
//     });
// }

// function fetchPosts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Posts data received'), 5000);
//     });
// }

// fetchUserData()
//     .then((userData) => {
//         console.log(userData);
//         return fetchPosts();
//     })
//     .then((postsData) => {
//         console.log(postsData);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });




async function getUserAndPosts() {
    try {
        const userData = await fetchUserData();
        console.log(userData);
        const postsData = await fetchPosts();
        console.log(postsData);
    } catch (error) {

    }
}
getUserAndPosts();