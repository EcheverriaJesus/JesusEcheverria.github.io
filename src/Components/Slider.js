import React from 'react'
import { SvgJava, SvgFigma, SvgElectron, SvgCake, SvgReact, SvgLaravel, SvgAsp, SvgPhp, SvgTailwind, SvgSass, SvgGit, SvgLivewire, SvgBlender } from '../svg/Svgs'

export default function Slider() {
    return (
        <>
            <div
                x-data="{}"
                x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
                className="w-full py-3 inline-flex  overflow-hidden"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-3 lg:[&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgAsp }} />
                    </li>
                    <li>
                        <div className='w-10 img' dangerouslySetInnerHTML={{ __html: SvgJava }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgFigma }} />
                    </li>
                    <li>
                        <div className='w-10 img' dangerouslySetInnerHTML={{ __html: SvgLaravel }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgElectron }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgCake }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgReact }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgPhp }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgTailwind }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgSass }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgGit }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgLivewire }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgBlender }} />
                    </li>
                </ul>
            </div>
        </>
    )
}
