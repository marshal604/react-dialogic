import { DialogueConfig } from 'react-dialogic';
import 楊過 from './images/楊過.png'
import 小龍女 from './images/小龍女.png'
import 矇眼的小龍女 from './images/矇眼的小龍女.png'
import 歐陽鋒 from './images/歐陽鋒.png'
import 尹志平 from './images/尹志平.png'
import 草原背景 from './images/草原背景.png'


// 角色配置
export const characters = {
  yangGuo: {
    name: '楊過',
    images: {
      default: 楊過
    },
    textColor: '#3a86ff'
  },
  xiaoLongNv: {
    name: '小龍女',
    images: {
      default: 小龍女,
      blindfolded: 矇眼的小龍女
    },
    textColor: '#8338ec'
  },
  ouYangFeng: {
    name: '歐陽鋒',
    images: {
      default: 歐陽鋒
    },
    textColor: '#fb5607'
  },
  yinZhiPing: {
    name: '尹志平',
    images: {
      default: 尹志平
    },
    textColor: '#38b000'
  }
};

// 對話腳本
export const dialogue: DialogueConfig = {
  start: {
    text: '楊過，我們去鐘南山練武功吧，我可以教你蛤蟆功。',
    character: 'ouYangFeng',
    position: 'left',
    background: 草原背景,
    next: 'yangGuo_response'
  },
  yangGuo_response: {
    text: '好的，歐陽前輩。',
    character: 'yangGuo',
    position: 'right',
    background: 草原背景,
    next: 'xiaoLongNv_follows'
  },
  xiaoLongNv_follows: {
    text: '楊過，我跟你一起去。',
    character: 'xiaoLongNv',
    position: 'left',
    background: 草原背景,
    next: 'arrive_mountain'
  },
  arrive_mountain: {
    text: '（到達鐘南山後）楊過，專心練功！',
    character: 'ouYangFeng',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_watches'
  },
  xiaoLongNv_watches: {
    text: '（小龍女在一旁觀看）',
    character: 'xiaoLongNv',
    position: 'right',
    background: 草原背景,
    next: 'ouYangFeng_attack'
  },
  ouYangFeng_attack: {
    text: '（突然間，歐陽鋒偷襲小龍女並點了她的穴道）',
    character: 'ouYangFeng',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_paralyzed'
  },
  xiaoLongNv_paralyzed: {
    text: '我...我動不了...',
    character: 'xiaoLongNv',
    position: 'right',
    background: 草原背景,
    next: 'yangGuo_concerned'
  },
  yangGuo_concerned: {
    text: '剛剛發生了什麼事？',
    character: 'yangGuo',
    position: 'left',
    background: 草原背景,
    next: 'ouYangFeng_distract'
  },
  ouYangFeng_distract: {
    text: '楊過，專心練功！不要分心！',
    character: 'ouYangFeng',
    position: 'right',
    background: 草原背景,
    next: 'yinZhiPing_arrives'
  },
  yinZhiPing_arrives: {
    text: '（尹志平出現在場景中）',
    character: 'yinZhiPing',
    position: 'left',
    background: 草原背景,
    next: 'yinZhiPing_blind'
  },
  yinZhiPing_blind: {
    text: '（尹志平趁機將小龍女的眼睛蒙上）',
    character: 'yinZhiPing',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_blinded'
  },
  xiaoLongNv_blinded: {
    text: '誰...是誰？放開我！',
    character: 'xiaoLongNv',
    emotion: 'blindfolded',
    position: 'right',
    background: 草原背景,
    next: 'yinZhiPing_evil'
  },
  yinZhiPing_evil: {
    text: '（尹志平將小龍女帶到了偏僻的山洞）',
    character: 'yinZhiPing',
    position: 'left',
    background: 草原背景,
    next: 'yinZhiPing_assault'
  },
  yinZhiPing_assault: {
    text: '古墓派的小龍女，我早就仰慕你的美貌...',
    character: 'yinZhiPing',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_scared'
  },
  xiaoLongNv_scared: {
    text: '過兒是你嗎?',
    character: 'xiaoLongNv',
    emotion: 'blindfolded',
    position: 'right',
    background: 草原背景,
    next: 'yinZhiPing_success'
  },
  yinZhiPing_success: {
    text: '（尹志平得逞了，小龍女被玷污）',
    character: 'yinZhiPing',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_despair'
  },
  xiaoLongNv_despair: {
    text: '（過兒會對我負責的...）',
    character: 'xiaoLongNv',
    emotion: 'blindfolded',
    position: 'right',
    background: 草原背景,
    next: 'yangGuo_finds'
  },
  yangGuo_finds: {
    text: '（楊過發現小龍女失蹤，追蹤找到山洞）',
    character: 'yangGuo',
    position: 'left',
    background: 草原背景,
    next: 'yangGuo_removes_blindfold'
  },
  yangGuo_removes_blindfold: {
    text: '（楊過解開小龍女的蒙眼布，並為她解開穴道）姑姑，你沒事吧？',
    character: 'yangGuo',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_asks'
  },
  xiaoLongNv_asks: {
    text: '過兒...你還叫我姑姑嗎...',
    character: 'xiaoLongNv',
    position: 'right',
    background: 草原背景,
    next: 'yangGuo_comfort'
  },
  yangGuo_comfort: {
    text: '姑姑就是姑姑啊',
    character: 'yangGuo',
    position: 'left',
    background: 草原背景,
    next: 'xiaoLongNv_question'
  },
  xiaoLongNv_question: {
    text: '過兒...你為什麼還叫我姑姑',
    character: 'xiaoLongNv',
    position: 'right',
    background: 草原背景,
    choices: [
        { text: '姑姑就是姑姑啊，不然要叫你什麼', next: 'sad_ending' }
    ]
  },
  sad_ending: {
    text: '既然如此...我會離開，去絕情谷了斷這段情意...',
    character: 'xiaoLongNv',
    position: 'right',
    background: 草原背景,
    next: 'xiaoLongNv_leaves'
  },
  xiaoLongNv_leaves: {
    text: '姑姑！等等！',
    character: 'yangGuo',
    position: 'left',
    background: 草原背景,
    // 沒有next屬性，對話結束，悲傷結局
  }
}; 