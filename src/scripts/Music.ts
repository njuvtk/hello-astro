import SITE_CONFIG from "@/config";
const { vhMusicApi } = SITE_CONFIG;
import { $GET } from '@/utils/index'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

// 初始化音乐播放器
export default async (MusicList: any[]) => {
  const musicDOM: any = document.querySelectorAll(".vh-node.vh-vhMusic");
  if (!musicDOM.length) return;
  musicDOM.forEach(async (container: any) => {
    const { id } = container.dataset;
    const audioData = await $GET(`${vhMusicApi}?id=${id}`);
    if (audioData?.detail?.songs && audioData?.url) {
      const song = audioData.detail.songs[0];
      const audio = [{
        name: song.name,
        artist: song.artists.map((artist: any) => artist.name).join(', '),
        url: audioData.url.url,
        cover: song.album.blurPicUrl,
        lrc: audioData.lyric?.lyric || '', // 歌词
      }];
      const ap = new APlayer({ container, audio, lrcType: 3 });
      MusicList.push(ap);
    }
  });
};
