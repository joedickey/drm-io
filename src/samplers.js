import * as Tone from 'tone'
import Kick from './audio/trbotkick.mp3'
import Snare from './audio/trbotsnare.mp3'
import HH1 from './audio/trbothh1.mp3'
import HH2 from './audio/trbothh2.mp3'
import Clap from './audio/trbotclap.mp3'
import Perc from './audio/trbotperc.mp3'


export const allSampler =
    
    new Tone.Sampler({
        urls: {
            C4: Kick,
            D4: Snare,
            E4: HH1,
            F4: HH2,
            G4: Clap, 
            A4: Perc,
        },
        onload: function() {console.log('samples loaded')},
    })
