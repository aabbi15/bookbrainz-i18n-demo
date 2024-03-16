import React from 'react';
import { useTranslation } from 'react-i18next';



export default function Footer(){
    const { t } = useTranslation()
    return (
        <footer>
        <div class="footer">
        
        <div class="row">
        <ul>
        <li><a href="#">{t('contactUs',{ns:'footer'})}</a></li>
        <li><a href="#">{t('ourServices',{ns:'footer'})}</a></li>
        <li><a href="#">{t('privacyPolicy',{ns:'footer'})}</a></li>
        <li><a href="#">{t('termsConditions',{ns:'footer'})}</a></li>
        <li><a href="#">{t('career',{ns:'footer'})}</a></li>
        </ul>
        </div>
        
        </div>
        </footer>
    )
}