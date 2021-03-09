//styles
import "../less/style.less";

//game
import "./menu";
import "./game";

//audios and videos
import "./media";

//starts playing background music
import { unmuteBackgroundSound } from "./menu/sound";
unmuteBackgroundSound();