//
// "imgThumbnail": "http://kaikaia.com/img/sigah.jpg",
//   "imgLogo": "http://kaikaia.com/img/Sigah-logo.png",
//   "title": "Sistema Interinstitucional de gestion de casos de adolescentes de Honduras",
//   "version": "v RC",
//   "lastUpdate": "03/22/2019",
//   "status": "Online",
//   "link": "http://sigah.kaikaia.com/"
// },
export type stateProject = 'Finish' | 'Working';
export interface Project {
  imgThumbnail: string;
  imgLogo: string;
  title: string;
  version: string;
  lastUpdate: string;
  status: string;
  link: string;
  state: stateProject;
  implement: string;
}
