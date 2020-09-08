import React from 'react';

import css from './spinner.module.css';

export default function spinner({description}) {
    return (
        <div className={css.flexRow}>
            <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                                <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            <div style={{fontSize: '2rem', marginLeft: '10px'}}>{description}</div>
        </div>
    );
}
