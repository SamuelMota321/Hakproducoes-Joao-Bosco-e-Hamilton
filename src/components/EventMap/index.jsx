import React, { useEffect, useState } from "react"
import eventImg from "../../assets/imgs/layout-evento.jpg"
import styles from "./styles.module.css"

const EventMap = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
      setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }



    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        } else {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <section className="container">
            <h1 className="title lg center bold">Mapa do Evento</h1>
            <div>
                <img src={eventImg} alt={"Imagem Ilustrativa do Evento"} onClick={openModal} style={{ cursor: 'pointer', width: "100%" }} />
                {isOpen && (
                    <div className={styles.modal} onClick={closeModal}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <span className={styles.close} onClick={closeModal}>X</span>
                            <img
                                src={eventImg}
                                alt={"Imagem Ilustrativa do Evento"}
                                style={{ width: "100%"}} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default EventMap
