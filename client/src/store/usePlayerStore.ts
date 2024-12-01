import { Song } from '@/types'
import {create} from 'zustand'


interface PlayerStore {
	currentSong: Song | null;
	isPlaying: boolean;
	queue: Song[];
	currentIndex: number;

	initializeQueue: (songs: Song[]) => void;
	playAlbum: (songs: Song[], startIndex?: number) => void;
	setCurrentSong: (song: Song | null) => void;
	togglePlay: () => void;
	playNext: () => void;
	playPrevious: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({

    currentSong: null,
	isPlaying: false,
	queue: [],
	currentIndex: -1,


    initializeQueue: (songs: Song[]) => {

        set({
			queue: songs,
			currentSong: get().currentSong || songs[0],
			currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
		});
	},


playAlbum:(songs:Song[],startIndex=0 )  =>{
    if(songs.length === 0) return;

const song = songs[startIndex]
set({
    queue:songs,
    currentSong: song,
    currentIndex: startIndex,
    isPlaying:true,
})
    
},


 setCurrentSong:(song:Song|null)=>{
    if(!song) return ;
    const songIndex = get().queue.findIndex(s => s._id === song._id);
    set({
        currentSong: song,
        isPlaying:true,
        currentIndex: songIndex !== -1 ? songIndex:get().currentIndex
    })
 },

 togglePlay:()=>{
    const willStartPlaying = !get().isPlaying;
    set({
        isPlaying: willStartPlaying,
    })
 },
 playNext:()=>{
    const {currentIndex,queue} = get()
    const nextIdx = currentIndex +1 ;
    //if there is next song to play , let's playit 
    if(nextIdx <queue.length){
        const nextSong = queue[nextIdx]
        set({
            currentSong: nextSong,
            currentIndex: nextIdx,
            isPlaying:true,
        })
    }else{
        //if there is no next song, let's play the first one
        const firstSong = queue[0]
        set({isPlaying:false,
        })
    }
 },

 playPrevious:()=>{
    const {currentIndex,queue} = get();
const prevIndex = currentIndex -1 ;
// if there is a previous song
if(prevIndex >= 0){
const prevSong = queue[prevIndex];
set({
    currentSong: prevSong,
    currentIndex: prevIndex,
    isPlaying:true
})
}else{
// no previous song
set({isPlaying:false});
}
 }
}));