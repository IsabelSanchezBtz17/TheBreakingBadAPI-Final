export class Episode{
    constructor(
        public episode_id: number,
        public title: string,
        public season: number,
        public air_date: string,
        public characters: string[] 
        )
        { }
}