import { Button, Stack, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import Wavesurfer from 'wavesurfer.js'

interface Props {
    url: string | File
}

const Waveform = ({ url }: Props) => {
    const waveform = useRef<any>(null)

    useEffect(() => {
        if (!waveform.current) {
            waveform.current = Wavesurfer.create({
                container: '#waveform',
                waveColor: '#85b6c5',
                barGap: 2,
                barWidth: 3,
                barRadius: 3,
                cursorWidth: 3,
                cursorColor: '#20253B',
                xhr: {
                    mode: 'no-cors',
                },
            })
            waveform.current.load(url)
        }
    }, [url])

    const playAudio = () => {
        if (waveform.current.isPlaying()) {
            waveform.current.pause()
        } else {
            waveform.current.play()
        }
    }

    return (
        <Stack
            sx={{
                flexDirection: 'column',
                w: '100%',
            }}
        >
            <Typography>Below must have wavesurfer</Typography>
            <div id='waveform' />
            <Stack flexDirection='row' justifyContent='center'>
                <Button
                    sx={{
                        margin: 4,
                    }}
                    onClick={playAudio}
                >
                    <Typography>Play / Pause</Typography>
                </Button>
            </Stack>
        </Stack>
    )
}

export default Waveform
