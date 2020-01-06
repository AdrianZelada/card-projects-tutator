export type projectProgress = 'Finish' | 'Working';

export interface Project {
  /**
   * Project Screen
   * @example
   * imgThumbnail: 'https://i.ibb.co/nPzNsc5/a.png'
   *
   * @type {string}
   * @memberOf Project
   */
  imgThumbnail: string;
  /**
   * Project Logo
   * @example
   * imgLogo: 'https://i.ibb.co/nPzNsc5/a.png'
   *
   * @type {string}
   * @memberOf Project
   */
  imgLogo: string;
  /**
   * Project Name
   * @example
   * name: 'Tahaddi'
   *
   * @type {string}
   * @memberOf Project
   */
  name: string;
  /**
   * Project Version
   * @example
   * version: 'v1'
   *
   * @type {string}
   * @memberOf Project
   */
  version: string;
  /**
   * Latest project update
   * @example
   * lastUpdate: '12/01/2019'
   *
   * @type {string}
   * @memberOf Project
   */
  lastUpdate: string;
  /**
   * Project Status
   * @example
   * status: 'Online' || 'Offline'
   *
   * @type {string}
   * @memberOf Project
   */
  status: string;
  /**
   * Link for View the Project
   * @example
   * link: 'www.kaikaia.com'
   *
   * @type {string}
   * @memberOf Project
   */
  link: string;
  /**
   * Project progress
   * @example
   * progress: 'Finish' || 'Working'
   *
   * @type {string}
   * @memberOf Project
   */
  progress: projectProgress;
  /**
   * Place where it was implemented
   * @example
   * implement: 'Panama'
   *
   * @type {string}
   * @memberOf Project
   */
  implement: string;
}
