import dynamic from 'next/dynamic'

const Waveform = dynamic(() => import('../components/waveSurfer'), { ssr: false })

import { Typography } from '@mui/material'
export default function Home() {
    return (
        <div>
            <Typography variant='h4'>Sample WaveSurfer</Typography>
            <Waveform url='https://media.rdal.dev/ps0za5za0fm4kn/b670c2bf095ece3835da0a7331de2fd4d13d7fc20a7f618fe8c5689c3c314a9a.dat' />
        </div>
    )
}
