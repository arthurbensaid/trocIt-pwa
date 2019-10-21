import { GiveList } from './give-list';
import { Usr } from './usr';

export class Item {

  private id: number;

  public get _id(): number {
    return this.id;
  }

  public set _id(value: number) {
    this.id = value;
  }

  private title: string;

  public get _title(): string {
    return this.title;
  }

  public set _title(value: string) {
    this.title = value;
  }

  private photo: string;

  public get _photo(): string {
    return this.photo;
  }

  public set _photo(value: string) {
    this.photo = value;
  }

  private description: string;

  public get _description(): string {
    return this.description;
  }

  public set _description(value: string) {
    this.description = value;
  }

  private giveList: GiveList;

  public get _giveList(): GiveList {
    return this.giveList;
  }

  public set _giveList(value: GiveList) {
    this.giveList = value;
  }

  private likers: Array<Usr>;

  public get _likers(): Array<Usr> {
    return this.likers;
  }

  public set _likers(value: Array<Usr>) {
    this.likers = value;
  }

  public deserialize(data: any): Item {
    Object.assign(this, data);
    return this;
  }

}
