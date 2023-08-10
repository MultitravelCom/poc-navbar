import React from 'react'

export default function SeccionLi({ seccion, iconSvg, url }) {
    return (
        <a href={url} className={`seccionLi main__container_seccionLi__${seccion}`}>
            <div className="main__container_seccionLi__svg">
                {iconSvg}
            </div>
            <div className="main__container__seccionLi_seccion">
                {seccion}
            </div>
        </a>
    )
}
