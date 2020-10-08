import CustomPlayer from './components/CustomPlayer';

const video = new CustomPlayer(
  320,
  240,
  'Your browser does not support the video tag.',
);

video.setSources([
  {
    src:
      'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
    type: 'video/mp4',
  },
  {
    src:
      'https://file-examples-com.github.io/uploads/2017/11/file_example_OOG_1MG.ogg',
    type: 'video/ogg',
  },
]);

video.render('MyPlayerId');
