import * as Tone from 'tone'

export const kickSampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbotkick.mp3",
        },
        baseUrl: "/audio/",
    })

export const snareSampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbotsnare.mp3", 
        },
        baseUrl: "/audio/",
    })

export const hh1Sampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbothh1.mp3", 
        },
        baseUrl: "/audio/",
    })

export const hh2Sampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbothh2.mp3", 
        },
        baseUrl: "/audio/",
    })

export const clapSampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbotclap.mp3", 
        },
        baseUrl: "/audio/",
    })

export const percSampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbotperc.mp3", 
        },
        baseUrl: "/audio/",
    })


export const allSampler =
    
    new Tone.Sampler({
        urls: {
            C4: "trbotkick.mp3",
            D4: "trbotsnare.mp3",
            E4: "trbothh1.mp3",
            F4: "trbothh2.mp3",
            G4: "trbotclap.mp3", 
            A4: "trbotperc.mp3",
        },
        onload: function() {console.log('samples loaded')},
        baseUrl: "/audio/",
    })
