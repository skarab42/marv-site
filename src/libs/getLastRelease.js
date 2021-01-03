// import axios from "axios";

// // const extsToOS = {
// //   deb: "linux",
// //   AppImage: "linux",
// //   exe: "win32",
// //   dmg: "darwin",
// //   pkg: "darwin",
// // };

// export default function getLastRelease(repo:string): Promise {
//   const url = `https://api.github.com/repos/${repo}/releases/latest`;
//   return axios.get(url).then(async (res) => {
//     console.log(res);
//     // const exts = {};

//     // res.data.assets.forEach((asset) => {
//     //   const url = asset.browser_download_url;
//     //   const ext = url.split(".").pop();
//     //   exts[extsToOS[ext]] = url;
//     // });

//   });
// }

export default (prout) => console.log(prout);

