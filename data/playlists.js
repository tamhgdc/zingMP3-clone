const listPlaylist = [
  {
    name: "V-Pop: The A-List",
    creator: "Zing MP3",
    path: "./assets/music/listSong1/song1.mp3",
    image: "/assets/images/playlists/playlist1.jpg",
  },
  {
    name: "Rồi Tới Luôn",
    creator: "Nal",
    image: "/assets/images/playlists/playlist2.jpg",
  },
  {
    name: "Nhạc Q.Tế",
    creator: "Lạc Trôi",
    image: "/assets/images/playlists/playlist3.jpg",
  },
  {
    name: "Những bản hit của Rap Việt",
    creator: "Bigcityboi",
    image: "/assets/images/playlists/playlist4.jpg",
  },
  {
    name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist5.jpg",
  },
  {
    name: "Những bản nhạc Dance hay nhất",
    creator: "Đạt Tấn",
    image: "/assets/images/playlists/playlist6.jpg",
  },
  {
    name: "Em Hát Ai Nghe",
    creator: "Ngọc Trâm",
    image: "/assets/images/playlists/playlist7.jpg",
  },
  {
    name: "Chill cùng Đen Vâu",
    creator: "Trà My",
    image: "/assets/images/playlists/playlist8.jpg",
  },
  {
    name: "Những bản hit hay nhất của Sơn Tùng MTP",
    creator: "Nguyễn Thành Công",
    image: "/assets/images/playlists/playlist9.jpg",
  },
  {
    name: "Thế Giới V-Pop Vol. 3",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist10.jpg",
  },
  {
    name: "BodyTalk",
    creator: "Lâm Huy",
    image: "/assets/images/playlists/playlist11.jpg",
  },
  {
    name: "Playlist Này Chill Phết",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist12.jpg",
  },
  {
    name: "BlackJack",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist13.jpg",
  },
  {
    name: "4U - On Repeat",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist14.jpg",
  },
  {
    name: "Những Bài Hát Hay Nhất Của Mr. Siro",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist15.jpg",
  },
  {
    name: "Top EDM Songs Of 2018",
    creator: "Zing MP3",
    image: "./assets/images/playlists/playlist16.jpg",
  },
  {
    name: "Giai Điệu Và Trào Lưu Gây Sốt",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist17.jpg",
  },
  {
    name: "Những Bài Hát Hay Nhất Của HKT",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist18.jpg",
  },
  {
    name: "100% Gây Nghiện",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist19.jpg",
  },
  {
    name: "Nhạc Việt Được Nghe Nhiều Nhất",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist20.jpg",
  },
  {
    name: "Dance Việt Hay Nhất",
    creator: "Zing MP3",
    image: "/assets/images/playlists/playlist21.jpg",
  },
];

const PLAYLIST_STORAGE_KEY = "VIK_PLAYLIST";

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));
