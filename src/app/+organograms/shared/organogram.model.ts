export interface IOrganogram {
  $key?: string;
  uniqueId?: string;
  name: string;
  type: string;
  managedBy?: string;
  district: string;
}

// export class Organogram implements IOrganogram {
//   uniqueId: string;  
//   name: string;

//   constructor(uniqueId: string,
//               name: string) {
//     this.name = name;
//     this.uniqueId = uniqueId;
//   }
// }
