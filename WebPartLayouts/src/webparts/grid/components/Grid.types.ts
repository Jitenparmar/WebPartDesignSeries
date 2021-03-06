export interface IGridProps {

}

export interface IGridState {
  items: IGridItem[];
}

export interface IGridItem {
  thumbnail: string;
  title: string;
  name: string;
  profileImageSrc: string;
  location: string;
  activity: string;
}
