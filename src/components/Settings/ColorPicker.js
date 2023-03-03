import React, { useEffect, useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

function ColorPicker({ color, handleBgColorChange }) {
    const hexToRgbA = hex => {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return {
                r: (c >> 16) & 255,
                g: (c >> 8) & 255,
                b: c & 255,
                a: 1,
            }
        }
    }

    const [state, setState] = useState({
        displayColorPicker: false,
        color: hexToRgbA(color)
    });

    useEffect(() => {
        if (hexToRgbA(color)){
            setState({ ...state, color: hexToRgbA(color) })
        }
    }, [color])

    const handleClick = () => {
        setState({ ...state, displayColorPicker: !state.displayColorPicker })
    };

    const handleClose = () => {
        setState({ ...state, displayColorPicker: false })
    };

    const handleChange = (color) => {
        setState({ ...state, color: color.rgb })
        handleBgColorChange(color.hex)
    };


    const styles = reactCSS({
        'default': {
            color: {
                width: '38px',
                height: '38px',
                borderRadius: '2px',
                background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
                cursor: 'pointer',
            },

            popover: {
                position: 'absolute',
                zIndex: '2',
                right: 0,
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
                cursor: 'pointer',
                
            },
        },
    });

    return (
        <div>
            <div onClick={handleClick} style={styles.color} />
            {state.displayColorPicker ? <div style={styles.popover}>
                <div style={ styles.cover } onClick={ handleClose }/>
                <SketchPicker color={state.color} onChange={handleChange} />
            </div> : null}

        </div>

    )

}

export default ColorPicker