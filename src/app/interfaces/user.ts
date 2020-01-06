export interface User {
  /**
   * User Photo
   * @example
   * photo: 'https://i.ibb.co/nPzNsc5/a.png'
   *
   * @type {string}
   * @memberOf User
   */
  photo: string;
  /**
   * User Full Name
   * @example
   * fullName: 'Adrian Pedro Zelada Torrez'
   *
   * @type {string}
   * @memberOf User
   */
  fullName: string;
  /**
   * User Birthdate
   * @example
   * birthdate: '1989/03/16'
   *
   * @type {string}
   * @memberOf User
   */
  birthdate: string;
  /**
   * User Team
   * @example
   * team: 'Research'
   *
   * @type {string}
   * @memberOf User
   */
  team: string;
}

/**
 * Default user Value
 */
export const defaultUser: User = {
  photo: '',
  fullName: '',
  birthdate: '',
  team: ''
};

