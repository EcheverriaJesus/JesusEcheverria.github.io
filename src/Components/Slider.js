import React from 'react'
import { SvgJava, SvgFigma, SvgElectron, SvgCake, SvgReact, SvgLaravel, SvgAsp, SvgPhp, SvgTailwind, SvgSass, SvgGit, SvgLivewire, SvgBlender } from '../svg/Svgs'

export default function Slider() {
      /* Opciones de las Tecnologias */
/*   let tecnologia = [
    { name: "SvgAsp", },
    { name: "SvgFigma",},
    { name: "SvgElectron" },
    { name: "SvgCake" },
    { name: "SvgReact" },
    { name: "SvgLaravel", },
    { name: "SvgJava",},
    { name: "SvgPhp" },
    { name: "SvgTailwind" },
    { name: "SvgSass" },
    { name: "SvgGit", },
    { name: "SvgLivewire",},
    { name: "SvgBlender" }
  ]
 */
    return (
        <>
            <div
                x-data="{}"
                x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
                class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
        {/* <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-5 lg:[&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
            {
              tecnologia.map((tecnologia, index) => (
                <li key={index}>
                    <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ _html: tecnologia.name }} />
                </li>
              ))
            }
          </ul> */}
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-5 lg:[&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgAsp }} />
                    </li>
                    <li>
                        <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ __html: SvgJava }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgFigma }} />
                    </li>
                    <li>
                        <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ __html: SvgLaravel }} />
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
                        <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ __html: SvgPhp }} />
                    </li>
                    <li>
                        <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ __html: SvgTailwind }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgSass }} />
                    </li>
                    <li>
                        <div className='w-10 imgs' dangerouslySetInnerHTML={{ __html: SvgGit }} />
                    </li>
                    <li>
                        <div className='w-10 imgs flotar' dangerouslySetInnerHTML={{ __html: SvgLivewire }} />
                    </li>
                    <li>
                        <div className='w-10 imgs girarLogo' dangerouslySetInnerHTML={{ __html: SvgBlender }} />
                    </li>
                </ul>
            </div>
        </>
    )
}
