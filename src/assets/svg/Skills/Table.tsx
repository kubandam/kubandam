import * as React from 'react'
import $ from 'jquery';
// @ts-ignore
import {hoverMouse} from '../../../assets/functions/mouse.js'
function Table(props: any) {
    hoverMouse()
    var [HoverID,changeHoverIDState] = React.useState(-1);
    var [blackWallActive,changeblackWallActive] = React.useState(true);
    const changeHoverID = (id:number) => {
        if(id != HoverID){
            changeHoverIDState(HoverID = id)
            console.log('changeHoverID')
        }
    }
    const getSkill = (id:number) => {
        switch (id) {
            case 0:
                return  [
                    "BootStrap", 
                    "https://getbootstrap.com/", 
                    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
                    "2018"]
            case 1:
                return ["Sass","","","2019"]
            case 2:
                return ["Figma","","","2020"]
            case 3:
                return ["CSS","","","2018"]
            case 4:
                return ["HTML","","","2018"]
            case 5:
                return "NodeJS"
            case 6:
                return "jQuery"
            case 7:
                return "JavaScript"
            case 8:
                return "VueJS"
            case 9:
                return "ReactJS"
            case 10:
                return "RestAPI"
            case 11:
                return "MySQL"
            case 12:
                return "PHP"
            case 13:
                return "Laravel"
            case 14:
                return "Symfony"
            case 15:
                return "Git"
            case 16:
                return "Python"
            case 17:
                return "C#"
            case 18:
                return "C++"
            case 19:
                return "C"
            default:
                return "";
        }
    }
    return (
        <div>
            <svg id="table" className={props.start ? 'active' : ''}  width="1456" height="916" viewBox="0 0 1456 916" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="stol">
                <path id="koberec" d="M1088 661.919C1088 824.06 860.396 916.389 674 916.389C487.604 916.389 360.5 890.895 360.5 728.755C360.5 566.614 570.604 479.236 757 479.236C943.396 479.236 1088 499.779 1088 661.919Z" fill="url(#paint0_radial_44_2485)" fillOpacity="0.1"/>
                <g id="g10">
                <g id="person_table">
                <g id="table">
                <g id="stol_2">
                <path id="path28" d="M847.465 846.573L827.095 835.496L826.46 647.433L846.829 658.508L847.465 846.573Z" fill="#312C69"/>
                <path id="path30" d="M493.038 659.887L472.668 648.809L472.011 454.034L492.38 465.111L493.038 659.887Z" fill="#312C69"/>
                <path id="path32" d="M493.037 659.886L721.513 544.591L612.606 404.529L492.38 465.111L493.037 659.886Z" fill="#453F89"/>
                <path id="path34" d="M1056.91 731.455L847.466 846.573L846.83 658.508L1056.27 543.387L1056.91 731.455Z" fill="#453F89"/>
                <path id="path36" d="M846.385 659.401L462.779 455.672L462.74 444.161L1062.94 529.351L1062.98 540.862L846.385 659.401Z" fill="#312C69"/>
                <path id="path40" d="M846.346 647.889L462.74 444.163L682.171 322.303L1062.94 529.353L846.346 647.889Z" fill="#453F89"/>
                </g>
                <g id="klav">
                <path id="path42" d="M637.273 493.932L749.616 553.204C751.324 554.105 753.905 554.203 755.377 553.423L800.341 533.835C801.813 533.055 803.26 515.953 801.312 521.497L679.299 475.308C677.591 474.41 675.01 474.309 673.538 475.089L636.84 488.071C635.364 488.851 635.565 493.033 637.273 493.932Z" fill="#7C4F84"/>
                <path id="path44" d="M637.263 491.113L749.607 550.388C751.315 551.289 753.895 551.384 755.368 550.605C755.368 550.605 806.318 522.99 802.004 520.42L688.965 462.225C687.258 461.326 674.989 467.871 673.516 468.651L636.84 488.071C635.365 488.85 635.555 490.212 637.263 491.113Z" fill="#B48DB8"/>
                <path id="path46" d="M679.71 475.286L673.124 471.812L676.571 469.988L683.154 473.462L679.71 475.286Z" fill="#986C9E"/>
                <path id="path48" d="M687.894 479.603L681.308 476.126L684.752 474.305L691.336 477.779L687.894 479.603Z" fill="#986C9E"/>
                <path id="path50" d="M667.544 482.202L660.958 478.725L666.641 475.72L673.227 479.191L667.544 482.202Z" fill="#986C9E"/>
                <path id="path52" d="M784.86 532.041L779.18 535.047L764.416 527.255L764.412 525.997L784.856 530.777L784.86 532.041Z" fill="#986C9E"/>
                <path id="path54" d="M665.352 489.006L652.975 482.479L658.658 479.47L671.032 485.998L665.352 489.006Z" fill="#986C9E"/>
                <path id="path56" d="M771.604 539.06L765.921 542.068L754.001 535.779L771.6 537.799L771.604 539.06Z" fill="#986C9E"/>
                <path id="path58" d="M661.114 493.778L646.348 485.989L652.031 482.981L666.797 490.769L661.114 493.778Z" fill="#986C9E"/>
                <path id="path60" d="M759.292 545.576L745.126 538.105L745.121 536.841L764.971 541.307L764.975 542.568L759.292 545.576Z" fill="#986C9E"/>
                <path id="path62" d="M673.124 471.812L677.17 471.812L677.166 470.431L673.119 470.431L673.124 471.812Z" fill="#986C9E"/>
                <path id="path64" d="M680.53 473.25L683.154 473.25L683.151 472.204L680.527 472.204L680.53 473.25Z" fill="#986C9E"/>
                <path id="path66" d="M661.82 478.462L666.497 478.462L666.494 477.417L661.816 477.417L661.82 478.462Z" fill="#986C9E"/>
                <path id="path68" d="M667.726 482.487L673.017 479.396L672.32 478.266L667.029 481.357L667.726 482.487Z" fill="#986C9E"/>
                <path id="path70" d="M652.975 482.423L657.096 482.423L657.092 481.217L652.971 481.217L652.975 482.423Z" fill="#986C9E"/>
                <path id="path72" d="M654.571 490.77L666.798 490.77L666.794 489.546L654.567 489.546L654.571 490.77Z" fill="#986C9E"/>
                <g id="g76">
                <g id="Clip path group">
                <mask id="mask0_44_2485" maskUnits="userSpaceOnUse" x="681" y="473" width="11" height="6">
                <g id="clipPath82">
                <path id="path80" d="M688.023 478.34L681.436 474.866L684.614 473.046L691.198 476.523L688.023 478.34Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask0_44_2485)">
                <g id="g78">
                <path id="path90" d="M688.023 478.34L681.436 474.866L684.614 473.046L691.198 476.523L688.023 478.34Z" fill="url(#paint1_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path92" d="M786.066 531.399L779.483 527.928L779.479 526.664L789.506 528.314L789.511 529.577L786.066 531.399Z" fill="#986C9E"/>
                <g id="g94">
                <g id="Clip path group_2">
                <mask id="mask1_44_2485" maskUnits="userSpaceOnUse" x="661" y="474" width="13" height="8">
                <g id="clipPath100">
                <path id="path98" d="M667.763 481.35L661.177 477.876L666.422 474.875L673.008 478.346L667.763 481.35Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask1_44_2485)">
                <g id="g96">
                <path id="path108" d="M667.763 481.35L661.177 477.876L666.422 474.875L673.008 478.346L667.763 481.35Z" fill="url(#paint2_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path110" d="M762.819 526.414L756.232 522.94L756.228 521.679L768.495 522.142L768.499 523.406L762.819 526.414Z" fill="#986C9E"/>
                <g id="g112">
                <g id="Clip path group_3">
                <mask id="mask2_44_2485" maskUnits="userSpaceOnUse" x="756" y="518" width="13" height="8">
                <g id="clipPath118">
                <path id="path116" d="M763.034 525.15L756.448 521.676L761.692 518.675L768.275 522.146L763.034 525.15Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask2_44_2485)">
                <g id="g114">
                <path id="path126" d="M763.034 525.15L756.448 521.676L761.692 518.675L768.275 522.146L763.034 525.15Z" fill="url(#paint3_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path128" d="M754.636 522.097L748.053 518.623L748.049 517.364L760.315 517.83L760.319 519.088L754.636 522.097Z" fill="#986C9E"/>
                <g id="g130">
                <g id="Clip path group_4">
                <mask id="mask3_44_2485" maskUnits="userSpaceOnUse" x="748" y="514" width="13" height="7">
                <g id="clipPath136">
                <path id="path134" d="M754.851 520.833L748.268 517.361L753.512 514.357L760.096 517.834L754.851 520.833Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask3_44_2485)">
                <g id="g132">
                <path id="path144" d="M754.851 520.833L748.268 517.361L753.512 514.357L760.096 517.834L754.851 520.833Z" fill="url(#paint4_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path146" d="M772.545 537.299L765.962 533.823L765.966 535.084L772.549 538.555L778.229 535.549L778.225 534.288L772.545 537.299Z" fill="#986C9E"/>
                <g id="g148">
                <g id="Clip path group_5">
                <mask id="mask4_44_2485" maskUnits="userSpaceOnUse" x="653" y="478" width="18" height="10">
                <g id="clipPath154">
                <path id="path152" d="M665.567 487.744L653.19 481.214L658.434 478.213L670.808 484.74L665.567 487.744Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask4_44_2485)">
                <g id="g150">
                <path id="path162" d="M665.567 487.744L653.19 481.214L658.434 478.213L670.808 484.74L665.567 487.744Z" fill="url(#paint5_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <g id="g164">
                <g id="Clip path group_6">
                <mask id="mask5_44_2485" maskUnits="userSpaceOnUse" x="754" y="531" width="18" height="10">
                <g id="clipPath170">
                <path id="path168" d="M771.38 537.803L766.136 540.804L754.216 534.517L759.461 531.516L771.38 537.803Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask5_44_2485)">
                <g id="g166">
                <path id="path178" d="M771.38 537.803L766.136 540.804L754.216 534.517L759.461 531.516L771.38 537.803Z" fill="url(#paint6_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <g id="g180">
                <g id="Clip path group_7">
                <mask id="mask6_44_2485" maskUnits="userSpaceOnUse" x="646" y="481" width="21" height="12">
                <g id="clipPath186">
                <path id="path184" d="M661.33 492.513L646.563 484.725L651.807 481.721L666.575 489.515L661.33 492.513Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask6_44_2485)">
                <g id="g182">
                <path id="path194" d="M661.33 492.513L646.563 484.725L651.807 481.721L666.575 489.515L661.33 492.513Z" fill="url(#paint7_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <g id="g196">
                <g id="Clip path group_8">
                <mask id="mask7_44_2485" maskUnits="userSpaceOnUse" x="745" y="533" width="20" height="12">
                <g id="clipPath202">
                <path id="path200" d="M759.507 544.312L745.34 536.838L750.585 533.837L764.751 541.311L759.507 544.312Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask7_44_2485)">
                <g id="g198">
                <path id="path210" d="M759.507 544.312L745.34 536.838L750.585 533.837L764.751 541.311L759.507 544.312Z" fill="url(#paint8_linear_44_2485)"/>
                </g>
                </g>
                </g>
                <g id="Clip path group_9">
                <mask id="mask8_44_2485" maskUnits="userSpaceOnUse" x="744" y="533" width="20" height="12">
                <g id="clipPath202_2">
                <path id="path200_2" d="M758.638 544.312L744.472 536.838L749.716 533.837L763.883 541.311L758.638 544.312Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask8_44_2485)">
                <g id="g198_2">
                <path id="path210_2" d="M758.638 544.312L744.472 536.838L749.716 533.837L763.883 541.311L758.638 544.312Z" fill="url(#paint9_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path212" d="M646.3 491.712L639.714 488.239L639.718 489.545L646.305 492.971L651.985 489.963L651.98 488.704L646.3 491.712Z" fill="#986C9E"/>
                <path id="path214" d="M654.481 496.027L647.897 492.553L647.902 493.777L654.485 497.288L660.168 494.28L660.164 493.021L654.481 496.027Z" fill="#986C9E"/>
                <g id="g216">
                <g id="Clip path group_10">
                <mask id="mask9_44_2485" maskUnits="userSpaceOnUse" x="648" y="489" width="12" height="8">
                <g id="clipPath222">
                <path id="path220" d="M653.36 489.549L648.116 492.55L654.7 496.024L659.944 493.025L653.36 489.549Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask9_44_2485)">
                <g id="g218">
                <path id="path230" d="M653.36 489.549L648.116 492.55L654.7 496.024L659.944 493.025L653.36 489.549Z" fill="url(#paint10_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path232" d="M662.664 500.344L656.078 496.87L656.082 498.094L662.669 501.605L668.349 498.594L668.344 497.336L662.664 500.344Z" fill="#986C9E"/>
                <g id="g234">
                <g id="Clip path group_11">
                <mask id="mask10_44_2485" maskUnits="userSpaceOnUse" x="656" y="493" width="13" height="8">
                <g id="clipPath240">
                <path id="path238" d="M661.538 493.866L656.296 496.868L662.883 500.342L668.125 497.34L661.538 493.866Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask10_44_2485)">
                <g id="g236">
                <path id="path248" d="M661.538 493.866L656.296 496.868L662.883 500.342L668.125 497.34L661.538 493.866Z" fill="url(#paint11_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 14">
                <path id="path250" d="M763.92 532.752L757.336 529.278L757.341 530.536L763.924 534.01L769.607 531.004L769.603 529.741L763.92 532.752Z" fill="#986C9E"/>
                <g id="g252">
                <g id="Clip path group_12">
                <mask id="mask11_44_2485" maskUnits="userSpaceOnUse" x="757" y="526" width="13" height="7">
                <g id="clipPath258">
                <path id="path256" d="M769.383 529.744L762.798 526.273L757.613 529.24L764.14 532.748L769.383 529.744Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask11_44_2485)">
                <g id="g254">
                <path id="path266" d="M769.383 529.744L762.798 526.273L757.613 529.24L764.14 532.748L769.383 529.744Z" fill="url(#paint12_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 15">
                <path id="path250_2" d="M748.283 532.752L741.699 529.278L741.703 530.536L748.287 534.01L753.97 531.004L753.966 529.741L748.283 532.752Z" fill="#986C9E"/>
                <g id="g252_2">
                <g id="Clip path group_13">
                <mask id="mask12_44_2485" maskUnits="userSpaceOnUse" x="741" y="526" width="13" height="7">
                <g id="clipPath258_2">
                <path id="path256_2" d="M753.746 529.745L747.161 526.273L741.976 529.24L748.503 532.749L753.746 529.745Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask12_44_2485)">
                <g id="g254_2">
                <path id="path266_2" d="M753.746 529.745L747.161 526.273L741.976 529.24L748.503 532.749L753.746 529.745Z" fill="url(#paint13_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 19">
                <g id="Group 16">
                <path id="path250_3" d="M746.545 515.775L739.962 512.302L739.966 513.56L746.55 517.034L752.233 514.028L752.228 512.765L746.545 515.775Z" fill="#986C9E"/>
                <g id="g252_3">
                <g id="Clip path group_14">
                <mask id="mask13_44_2485" maskUnits="userSpaceOnUse" x="740" y="509" width="13" height="7">
                <g id="clipPath258_3">
                <path id="path256_3" d="M752.009 512.768L745.424 509.297L740.24 512.264L746.766 515.772L752.009 512.768Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask13_44_2485)">
                <g id="g254_3">
                <path id="path266_3" d="M752.009 512.768L745.424 509.297L740.24 512.264L746.766 515.772L752.009 512.768Z" fill="url(#paint14_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17">
                <path id="path250_4" d="M737.858 510.683L731.275 507.209L731.279 508.467L737.862 511.941L743.545 508.935L743.541 507.672L737.858 510.683Z" fill="#986C9E"/>
                <g id="g252_4">
                <g id="Clip path group_15">
                <mask id="mask14_44_2485" maskUnits="userSpaceOnUse" x="731" y="504" width="13" height="7">
                <g id="clipPath258_4">
                <path id="path256_4" d="M743.321 507.676L736.736 504.204L731.552 507.171L738.078 510.68L743.321 507.676Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask14_44_2485)">
                <g id="g254_4">
                <path id="path266_4" d="M743.321 507.676L736.736 504.204L731.552 507.171L738.078 510.68L743.321 507.676Z" fill="url(#paint15_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18">
                <path id="path250_5" d="M729.171 505.59L722.587 502.116L722.592 503.375L729.175 506.849L734.858 503.843L734.854 502.579L729.171 505.59Z" fill="#986C9E"/>
                <g id="g252_5">
                <g id="Clip path group_16">
                <mask id="mask15_44_2485" maskUnits="userSpaceOnUse" x="722" y="499" width="13" height="7">
                <g id="clipPath258_5">
                <path id="path256_5" d="M734.634 502.583L728.05 499.112L722.865 502.079L729.391 505.587L734.634 502.583Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask15_44_2485)">
                <g id="g254_5">
                <path id="path266_5" d="M734.634 502.583L728.05 499.112L722.865 502.079L729.391 505.587L734.634 502.583Z" fill="url(#paint16_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 20">
                <g id="Group 16_2">
                <path id="path250_6" d="M719.665 500.026L713.081 496.553L713.086 497.811L719.669 501.285L725.352 498.279L725.348 497.015L719.665 500.026Z" fill="#986C9E"/>
                <g id="g252_6">
                <g id="Clip path group_17">
                <mask id="mask16_44_2485" maskUnits="userSpaceOnUse" x="713" y="493" width="13" height="8">
                <g id="clipPath258_6">
                <path id="path256_6" d="M725.128 497.019L718.544 493.548L713.359 496.515L719.885 500.023L725.128 497.019Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask16_44_2485)">
                <g id="g254_6">
                <path id="path266_6" d="M725.128 497.019L718.544 493.548L713.359 496.515L719.885 500.023L725.128 497.019Z" fill="url(#paint17_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17_2">
                <path id="path250_7" d="M710.978 494.933L704.394 491.46L704.398 492.718L710.982 496.192L716.665 493.186L716.661 491.922L710.978 494.933Z" fill="#986C9E"/>
                <g id="g252_7">
                <g id="Clip path group_18">
                <mask id="mask17_44_2485" maskUnits="userSpaceOnUse" x="704" y="488" width="13" height="7">
                <g id="clipPath258_7">
                <path id="path256_7" d="M716.441 491.926L709.855 488.455L704.671 491.422L711.198 494.93L716.441 491.926Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask17_44_2485)">
                <g id="g254_7">
                <path id="path266_7" d="M716.441 491.926L709.855 488.455L704.671 491.422L711.198 494.93L716.441 491.926Z" fill="url(#paint18_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18_2">
                <path id="path250_8" d="M702.29 489.84L695.707 486.366L695.711 487.625L702.295 491.099L707.978 488.093L707.973 486.829L702.29 489.84Z" fill="#986C9E"/>
                <g id="g252_8">
                <g id="Clip path group_19">
                <mask id="mask18_44_2485" maskUnits="userSpaceOnUse" x="695" y="483" width="13" height="7">
                <g id="clipPath258_8">
                <path id="path256_8" d="M707.753 486.833L701.168 483.362L695.984 486.329L702.51 489.837L707.753 486.833Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask18_44_2485)">
                <g id="g254_8">
                <path id="path266_8" d="M707.753 486.833L701.168 483.362L695.984 486.329L702.51 489.837L707.753 486.833Z" fill="url(#paint19_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 23">
                <g id="Group 21">
                <g id="Group 16_3">
                <path id="path250_9" d="M710.977 505.119L704.394 501.645L704.398 502.904L710.982 506.378L716.665 503.372L716.66 502.108L710.977 505.119Z" fill="#986C9E"/>
                <g id="g252_9">
                <g id="Clip path group_20">
                <mask id="mask19_44_2485" maskUnits="userSpaceOnUse" x="704" y="498" width="13" height="8">
                <g id="clipPath258_9">
                <path id="path256_9" d="M716.441 502.112L709.855 498.641L704.671 501.608L711.198 505.116L716.441 502.112Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask19_44_2485)">
                <g id="g254_9">
                <path id="path266_9" d="M716.441 502.112L709.855 498.641L704.671 501.608L711.198 505.116L716.441 502.112Z" fill="url(#paint20_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17_3">
                <path id="path250_10" d="M702.29 500.026L695.707 496.552L695.711 497.811L702.294 501.285L707.977 498.279L707.973 497.015L702.29 500.026Z" fill="#986C9E"/>
                <g id="g252_10">
                <g id="Clip path group_21">
                <mask id="mask20_44_2485" maskUnits="userSpaceOnUse" x="695" y="493" width="13" height="8">
                <g id="clipPath258_10">
                <path id="path256_10" d="M707.754 497.019L701.169 493.548L695.984 496.515L702.51 500.023L707.754 497.019Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask20_44_2485)">
                <g id="g254_10">
                <path id="path266_10" d="M707.754 497.019L701.169 493.548L695.984 496.515L702.51 500.023L707.754 497.019Z" fill="url(#paint21_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18_3">
                <path id="path250_11" d="M693.603 494.934L687.019 491.46L687.024 492.718L693.607 496.192L699.29 493.186L699.286 491.923L693.603 494.934Z" fill="#986C9E"/>
                <g id="g252_11">
                <g id="Clip path group_22">
                <mask id="mask21_44_2485" maskUnits="userSpaceOnUse" x="687" y="488" width="13" height="7">
                <g id="clipPath258_11">
                <path id="path256_11" d="M699.066 491.926L692.481 488.455L687.297 491.422L693.823 494.93L699.066 491.926Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask21_44_2485)">
                <g id="g254_11">
                <path id="path266_11" d="M699.066 491.926L692.481 488.455L687.297 491.422L693.823 494.93L699.066 491.926Z" fill="url(#paint22_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 22">
                <g id="Group 16_4">
                <path id="path250_12" d="M702.324 510.212L695.741 506.739L695.745 507.997L702.329 511.471L708.012 508.465L708.007 507.202L702.324 510.212Z" fill="#986C9E"/>
                <g id="g252_12">
                <g id="Clip path group_23">
                <mask id="mask22_44_2485" maskUnits="userSpaceOnUse" x="696" y="503" width="12" height="8">
                <g id="clipPath258_12">
                <path id="path256_12" d="M707.788 507.205L701.202 503.734L696.018 506.701L702.545 510.209L707.788 507.205Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask22_44_2485)">
                <g id="g254_12">
                <path id="path266_12" d="M707.788 507.205L701.202 503.734L696.018 506.701L702.545 510.209L707.788 507.205Z" fill="url(#paint23_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17_4">
                <path id="path250_13" d="M693.637 505.12L687.054 501.646L687.058 502.904L693.641 506.378L699.324 503.372L699.32 502.109L693.637 505.12Z" fill="#986C9E"/>
                <g id="g252_13">
                <g id="Clip path group_24">
                <mask id="mask23_44_2485" maskUnits="userSpaceOnUse" x="687" y="498" width="13" height="8">
                <g id="clipPath258_13">
                <path id="path256_13" d="M699.1 502.113L692.515 498.642L687.331 501.609L693.857 505.117L699.1 502.113Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask23_44_2485)">
                <g id="g254_13">
                <path id="path266_13" d="M699.1 502.113L692.515 498.642L687.331 501.609L693.857 505.117L699.1 502.113Z" fill="url(#paint24_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18_4">
                <path id="path250_14" d="M684.95 500.027L678.367 496.553L678.371 497.811L684.954 501.285L690.637 498.28L690.633 497.016L684.95 500.027Z" fill="#986C9E"/>
                <g id="g252_14">
                <g id="Clip path group_25">
                <mask id="mask24_44_2485" maskUnits="userSpaceOnUse" x="678" y="493" width="13" height="8">
                <g id="clipPath258_14">
                <path id="path256_14" d="M690.413 497.02L683.829 493.549L678.644 496.516L685.17 500.024L690.413 497.02Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask24_44_2485)">
                <g id="g254_14">
                <path id="path266_14" d="M690.413 497.02L683.829 493.549L678.644 496.516L685.17 500.024L690.413 497.02Z" fill="url(#paint25_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 23_2">
                <path id="path250_15" d="M673.615 505.883L666.17 502.455L666.174 503.697L702.212 521.979L708.293 518.159L679.191 503.305L673.615 505.883Z" fill="#986C9E"/>
                <g id="g252_15">
                <g id="Clip path group_26">
                <mask id="mask25_44_2485" maskUnits="userSpaceOnUse" x="651" y="492" width="64" height="45">
                <g id="clipPath258_15">
                <path id="path256_15" d="M714.133 516.35L678.571 492.716L651.172 512.927L686.424 536.813L714.133 516.35Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask25_44_2485)">
                <g id="g254_15">
                <path id="path266_15" d="M707.611 517.315L672.359 499.491L666.453 502.419L702.422 520.702L707.611 517.315Z" fill="url(#paint26_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 19_2">
                <path id="path250_16" d="M677.132 494.934L670.548 491.46L670.552 492.719L677.136 496.193L682.819 493.187L682.815 491.923L677.132 494.934Z" fill="#986C9E"/>
                <g id="g252_16">
                <g id="Clip path group_27">
                <mask id="mask26_44_2485" maskUnits="userSpaceOnUse" x="670" y="488" width="13" height="7">
                <g id="clipPath258_16">
                <path id="path256_16" d="M682.595 491.927L676.01 488.456L670.826 491.422L677.352 494.931L682.595 491.927Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask26_44_2485)">
                <g id="g254_16">
                <path id="path266_16" d="M682.595 491.927L676.01 488.456L670.826 491.422L677.352 494.931L682.595 491.927Z" fill="url(#paint27_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 20_2">
                <path id="path250_17" d="M684.916 489.841L678.332 486.367L678.337 487.625L684.92 491.099L690.603 488.093L690.599 486.83L684.916 489.841Z" fill="#986C9E"/>
                <g id="g252_17">
                <g id="Clip path group_28">
                <mask id="mask27_44_2485" maskUnits="userSpaceOnUse" x="678" y="483" width="13" height="7">
                <g id="clipPath258_17">
                <path id="path256_17" d="M690.379 486.834L683.793 483.362L678.609 486.329L685.136 489.837L690.379 486.834Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask27_44_2485)">
                <g id="g254_17">
                <path id="path266_17" d="M690.379 486.834L683.793 483.362L678.609 486.329L685.136 489.837L690.379 486.834Z" fill="url(#paint28_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 22_2">
                <path id="path250_18" d="M676.229 485.597L669.645 482.123L669.649 483.381L676.233 486.855L681.916 483.85L681.912 482.586L676.229 485.597Z" fill="#986C9E"/>
                <g id="g252_18">
                <g id="Clip path group_29">
                <mask id="mask28_44_2485" maskUnits="userSpaceOnUse" x="669" y="479" width="13" height="7">
                <g id="clipPath258_18">
                <path id="path256_18" d="M681.692 482.59L675.106 479.119L669.922 482.086L676.449 485.594L681.692 482.59Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask28_44_2485)">
                <g id="g254_18">
                <path id="path266_18" d="M681.692 482.59L675.106 479.119L669.922 482.086L676.449 485.594L681.692 482.59Z" fill="url(#paint29_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 21_2">
                <path id="path250_19" d="M693.638 484.749L687.054 481.275L687.058 482.533L693.642 486.007L699.325 483.001L699.321 481.738L693.638 484.749Z" fill="#986C9E"/>
                <g id="g252_19">
                <g id="Clip path group_30">
                <mask id="mask29_44_2485" maskUnits="userSpaceOnUse" x="687" y="478" width="13" height="7">
                <g id="clipPath258_19">
                <path id="path256_19" d="M699.101 481.742L692.515 478.27L687.331 481.237L693.858 484.746L699.101 481.742Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask29_44_2485)">
                <g id="g254_19">
                <path id="path266_19" d="M699.101 481.742L692.515 478.27L687.331 481.237L693.858 484.746L699.101 481.742Z" fill="url(#paint30_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 24">
                <g id="Group 21_3">
                <g id="Group 16_5">
                <path id="path250_20" d="M737.925 520.398L731.342 516.924L731.346 518.182L737.929 521.656L743.612 518.65L743.608 517.387L737.925 520.398Z" fill="#986C9E"/>
                <g id="g252_20">
                <g id="Clip path group_31">
                <mask id="mask30_44_2485" maskUnits="userSpaceOnUse" x="731" y="513" width="13" height="8">
                <g id="clipPath258_20">
                <path id="path256_20" d="M743.389 517.39L736.804 513.919L731.619 516.886L738.145 520.394L743.389 517.39Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask30_44_2485)">
                <g id="g254_20">
                <path id="path266_20" d="M743.389 517.39L736.804 513.919L731.619 516.886L738.145 520.394L743.389 517.39Z" fill="url(#paint31_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17_5">
                <path id="path250_21" d="M729.238 515.305L722.655 511.831L722.659 513.089L729.242 516.563L734.925 513.557L734.921 512.294L729.238 515.305Z" fill="#986C9E"/>
                <g id="g252_21">
                <g id="Clip path group_32">
                <mask id="mask31_44_2485" maskUnits="userSpaceOnUse" x="722" y="508" width="13" height="8">
                <g id="clipPath258_21">
                <path id="path256_21" d="M734.701 512.298L728.116 508.826L722.932 511.793L729.458 515.302L734.701 512.298Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask31_44_2485)">
                <g id="g254_21">
                <path id="path266_21" d="M734.701 512.298L728.116 508.826L722.932 511.793L729.458 515.302L734.701 512.298Z" fill="url(#paint32_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18_5">
                <path id="path250_22" d="M720.551 510.212L713.967 506.738L713.972 507.997L720.555 511.471L726.238 508.465L726.234 507.201L720.551 510.212Z" fill="#986C9E"/>
                <g id="g252_22">
                <g id="Clip path group_33">
                <mask id="mask32_44_2485" maskUnits="userSpaceOnUse" x="714" y="503" width="13" height="8">
                <g id="clipPath258_22">
                <path id="path256_22" d="M726.014 507.205L719.43 503.734L714.245 506.701L720.771 510.209L726.014 507.205Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask32_44_2485)">
                <g id="g254_22">
                <path id="path266_22" d="M726.014 507.205L719.43 503.734L714.245 506.701L720.771 510.209L726.014 507.205Z" fill="url(#paint33_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 22_3">
                <g id="Group 16_6">
                <path id="path250_23" d="M728.369 525.49L721.786 522.016L721.79 523.275L728.373 526.749L734.056 523.743L734.052 522.479L728.369 525.49Z" fill="#986C9E"/>
                <g id="g252_23">
                <g id="Clip path group_34">
                <mask id="mask33_44_2485" maskUnits="userSpaceOnUse" x="722" y="519" width="12" height="7">
                <g id="clipPath258_23">
                <path id="path256_23" d="M733.832 522.483L727.247 519.012L722.063 521.979L728.589 525.487L733.832 522.483Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask33_44_2485)">
                <g id="g254_23">
                <path id="path266_23" d="M733.832 522.483L727.247 519.012L722.063 521.979L728.589 525.487L733.832 522.483Z" fill="url(#paint34_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 17_6">
                <path id="path250_24" d="M719.682 520.398L713.098 516.924L713.103 518.182L719.686 521.656L725.369 518.65L725.365 517.387L719.682 520.398Z" fill="#986C9E"/>
                <g id="g252_24">
                <g id="Clip path group_35">
                <mask id="mask34_44_2485" maskUnits="userSpaceOnUse" x="713" y="513" width="13" height="8">
                <g id="clipPath258_24">
                <path id="path256_24" d="M725.145 517.39L718.561 513.919L713.376 516.886L719.902 520.394L725.145 517.39Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask34_44_2485)">
                <g id="g254_24">
                <path id="path266_24" d="M725.145 517.39L718.561 513.919L713.376 516.886L719.902 520.394L725.145 517.39Z" fill="url(#paint35_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group 18_6">
                <path id="path250_25" d="M710.995 515.305L704.411 511.831L704.415 513.089L710.999 516.563L716.682 513.557L716.678 512.294L710.995 515.305Z" fill="#986C9E"/>
                <g id="g252_25">
                <g id="Clip path group_36">
                <mask id="mask35_44_2485" maskUnits="userSpaceOnUse" x="704" y="508" width="13" height="8">
                <g id="clipPath258_25">
                <path id="path256_25" d="M716.458 512.298L709.873 508.826L704.689 511.793L711.215 515.302L716.458 512.298Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask35_44_2485)">
                <g id="g254_25">
                <path id="path266_25" d="M716.458 512.298L709.873 508.826L704.689 511.793L711.215 515.302L716.458 512.298Z" fill="url(#paint36_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="path268" d="M755.297 528.204L748.71 524.733L748.714 525.989L755.301 529.465L760.981 526.457L760.977 525.199L755.297 528.204Z" fill="#986C9E"/>
                <g id="g270">
                <g id="Clip path group_37">
                <mask id="mask36_44_2485" maskUnits="userSpaceOnUse" x="748" y="521" width="13" height="8">
                <g id="clipPath276">
                <path id="path274" d="M760.758 525.202L754.175 521.726L748.991 524.693L755.517 528.201L760.758 525.202Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask36_44_2485)">
                <g id="g272">
                <path id="path284" d="M760.758 525.202L754.175 521.726L748.991 524.693L755.517 528.201L760.758 525.202Z" fill="url(#paint37_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                <path id="path286" d="M777.884 527.081L771.301 523.605L771.296 522.346L781.327 523.996L781.331 525.255L777.884 527.081Z" fill="#986C9E"/>
                <path id="path288" d="M769.707 522.755L763.121 519.281L763.116 518.02L773.147 519.673L773.151 520.931L769.707 522.755Z" fill="#986C9E"/>
                <path id="path290" d="M761.524 518.433L754.941 514.962L754.936 513.698L764.964 515.351L764.968 516.612L761.524 518.433Z" fill="#986C9E"/>
                <g id="g292">
                <g id="Clip path group_38">
                <mask id="mask37_44_2485" maskUnits="userSpaceOnUse" x="755" y="511" width="10" height="7">
                <g id="clipPath298">
                <path id="path296" d="M761.653 517.174L755.068 513.695L758.244 511.878L764.83 515.352L761.653 517.174Z" fill="white"/>
                </g>
                </mask>
                <g mask="url(#mask37_44_2485)">
                <g id="g294">
                <path id="path306" d="M761.653 517.174L755.068 513.695L758.244 511.878L764.83 515.352L761.653 517.174Z" fill="url(#paint38_linear_44_2485)"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="kniha">
                <path id="path538" d="M607.704 462.36L690.522 422.212L690.492 413.322L547.756 425.286L547.786 434.176L607.704 462.36Z" fill="#535159"/>
                <path id="path540" d="M607.674 453.471L690.492 413.322L630.574 385.136L547.756 425.286L607.674 453.471Z" fill="#535159"/>
                <path id="path542" d="M650.203 422.192L668.736 413.445L634.459 397.32L615.923 406.065L650.203 422.192Z" fill="#939198"/>
                <path id="path544" d="M608.633 455.721L608.649 460.443L550.032 433.508L550.014 428.234L608.633 455.721Z" fill="white"/>
                <path id="path546" d="M608.634 455.721L690.503 416.317L690.517 420.486L608.65 460.443L608.634 455.721Z" fill="#D3E2F7"/>
                </g>
                <g id="PCL">
                <path id="path310" d="M696.802 425.944L782.057 470.912C782.057 470.886 801.212 457.589 812.676 454.607L722.079 406.817C711.961 410.476 701.644 415.919 691.535 422.946L696.802 425.944Z" fill="#B48DB8"/>
                <path id="path312" d="M812.673 454.607C802.529 458.287 792.186 463.756 782.054 470.825C782.06 472.797 782.067 474.682 782.073 476.567C792.315 471.145 802.581 465.723 812.823 460.299C812.816 458.382 812.81 456.471 812.803 454.554L812.673 454.607Z" fill="#7C4F84"/>
                <path id="path314" d="M696.802 425.943L691.352 423.069C691.336 424.989 691.342 426.895 691.348 428.798L782.077 476.657C782.07 474.682 782.064 472.797 782.057 470.912L696.802 425.943Z" fill="#956B9B"/>
                <path id="path316" d="M745.725 402.76L745.839 436.737C745.842 437.578 746.45 438.418 747.668 439.063C750.102 440.346 754.038 440.346 756.466 439.064C757.674 438.419 758.279 437.578 758.276 436.737L758.161 402.761L745.725 402.76Z" fill="#A27FB0"/>
                <path id="path318" d="M781.555 437.428L775.77 434.377L775.765 433.064L781.55 436.112L781.555 437.428Z" fill="#B48DB8"/>
                <path id="path320" d="M788.924 441.317L783.139 438.266L783.135 436.949L788.92 440L788.924 441.317Z" fill="#B48DB8"/>
                <path id="path322" d="M796.292 445.206L790.51 442.155L790.506 440.838L796.288 443.889L796.292 445.206Z" fill="#B48DB8"/>
                <path id="path324" d="M817.162 348.429L660.736 265.9C659.859 265.434 659.044 265.286 658.361 265.4L653.874 267.644L656.431 271.983L656.746 365.439C656.755 367.967 658.7 371.036 661.095 372.3L815.594 453.816L816.417 457.216L819.791 455.331C821.019 455.175 821.841 454.184 821.836 452.542L821.508 355.287C821.499 352.762 819.551 349.69 817.162 348.429Z" fill="#7C4F84"/>
                <path id="path326" d="M813.902 456.742L657.48 374.21C655.084 372.949 653.139 369.88 653.131 367.355L652.803 270.097C652.799 268.939 653.203 268.093 653.874 267.644C654.666 267.118 655.824 267.128 657.121 267.813L813.543 350.342C815.939 351.606 817.884 354.675 817.892 357.2L818.22 454.458C818.229 456.98 816.298 458.006 813.902 456.742Z" fill="#956B9B"/>
                <path id="path328" d="M816.071 356.239L816.386 449.785C816.327 451.183 815.241 451.72 813.88 450.99L657.457 368.466C656.076 367.737 654.941 365.958 654.936 364.485L654.621 271.05C654.618 270.246 654.951 269.709 655.515 269.519C655.93 269.345 656.498 269.403 657.124 269.728L813.547 352.257C814.951 352.984 816.066 354.782 816.071 356.239Z" fill="#B48DB8"/>
                <path id="path330" d="M816.062 356.23L816.378 449.774C815.939 449.927 815.375 449.853 814.768 449.528L658.346 367.002C656.964 366.272 655.827 364.493 655.822 363.017L655.506 269.508C655.925 269.336 656.492 269.392 657.119 269.72L813.538 352.246C814.943 352.973 816.057 354.774 816.062 356.23Z" fill="#190128"/>
                <path className="code" id="path332" d="M716.202 311.697L660.356 282.449L660.339 277.376L716.185 306.627L716.202 311.697Z" fill="#B48DB8"/>
                <path className="code_2" id="path332_2" d="M716.202 311.697L660.356 282.449L660.339 277.376L716.185 306.627L716.202 311.697Z" fill="#FB7D5D"/>
                <path className="code" id="path334" d="M760.927 335.125L734.398 321.226L734.381 316.156L760.909 330.051L760.927 335.125Z" fill="#B48DB8"/>
                <path className="code" id="path336" d="M686.459 316.102L660.423 302.465L660.406 297.395L686.442 311.029L686.459 316.102Z" fill="#B48DB8"/>
                <path className="code_2" id="path336_2" d="M686.459 316.102L660.423 302.465L660.406 297.395L686.442 311.029L686.459 316.102Z" fill="#FB7D5D"/>
                <path className="code" id="path338" d="M702.478 324.493L691.232 318.6L691.215 313.529L702.461 319.422L702.478 324.493Z" fill="#B48DB8"/>
                <path className="code_2" id="path338_2" d="M702.478 324.493L691.232 318.6L691.215 313.529L702.461 319.422L702.478 324.493Z" fill="#FB7D5D"/>
                <path className="code" id="path340" d="M716.548 331.861L706.1 326.389L706.083 321.318L716.531 326.791L716.548 331.861Z" fill="#B48DB8"/>
                <path className="code_2" id="path340_2" d="M716.548 331.861L706.1 326.389L706.083 321.318L716.531 326.791L716.548 331.861Z" fill="#FB7D5D"/>
                <path className="code" id="path342" d="M691.27 329.767L660.461 313.632L660.444 308.561L691.253 324.696L691.27 329.767Z" fill="#B48DB8"/>
                <path className="code_2" id="path342_2" d="M691.27 329.767L660.461 313.632L660.444 308.561L691.253 324.696L691.27 329.767Z" fill="#FB7D5D"/>
                <path className="code_2" id="path344" d="M705.847 337.402L695.234 331.842L695.216 326.774L705.83 332.332L705.847 337.402Z" fill="#FB7D5D"/>
                <path className="code_2" id="path346" d="M705.661 348.453L660.499 324.796L660.482 319.726L705.644 343.382L705.661 348.453Z" fill="#FB7D5D"/>
                <path className="code" id="path348" d="M718.909 355.39L703.894 347.527L703.877 342.457L718.892 350.319L718.909 355.39Z" fill="#B48DB8"/>
                <path className="code" id="path350" d="M735.026 363.832L722.769 357.413L722.752 352.342L735.009 358.761L735.026 363.832Z" fill="#B48DB8"/>
                <path className="code" id="path352" d="M690.396 351.604L660.536 335.963L660.519 330.893L690.379 346.533L690.396 351.604Z" fill="#B48DB8"/>
                <path className="code_2" id="path352_2" d="M690.396 351.604L660.536 335.963L660.519 330.892L690.379 346.533L690.396 351.604Z" fill="#FB7D5D"/>
                <path className="code" id="path354" d="M704.864 359.181L694.498 353.75L694.481 348.683L704.847 354.11L704.864 359.181Z" fill="#B48DB8"/>
                <path className="code_2" id="path354_2" d="M704.864 359.181L694.498 353.75L694.481 348.683L704.847 354.11L704.864 359.181Z" fill="#FB7D5D"/>
                <path className="code" id="path356" d="M692.695 363.953L660.574 347.13L660.557 342.059L692.678 358.882L692.695 363.953Z" fill="#B48DB8"/>
                <path className="code_2" id="path356_2" d="M692.695 363.953L660.574 347.13L660.557 342.059L692.678 358.882L692.695 363.953Z" fill="#FB7D5D"/>
                <path className="code" id="path358" d="M704.093 369.925L695.347 365.34L695.33 360.27L704.075 364.852L704.093 369.925Z" fill="#B48DB8"/>
                <path className="code" id="path360" d="M722.684 379.662L707.749 371.839L707.732 366.768L722.667 374.591L722.684 379.662Z" fill="#FB7D5D"/>
                <path className="code" id="path362" d="M691.197 374.316L660.612 358.297L660.595 353.226L691.18 369.245L691.197 374.316Z" fill="#B48DB8"/>
                <path className="code_2" id="path362_2" d="M691.197 374.315L660.612 358.297L660.595 353.226L691.18 369.245L691.197 374.315Z" fill="#FB7D5D"/>
                <path className="code_2" id="path364" d="M706.651 382.411L692.864 375.188L692.847 370.117L706.634 377.34L706.651 382.411Z" fill="#FB7D5D"/>
                <path className="code" id="path366" d="M735.921 330.196L660.383 290.634L660.366 285.564L735.904 325.126L735.921 330.196Z" fill="#B48DB8"/>
                <path className="code_2" id="path366_2" d="M735.921 330.196L660.383 290.634L660.366 285.564L735.904 325.126L735.921 330.196Z" fill="#FB7D5D"/>
                <path className="code" id="path368" d="M783.86 355.307L742.886 333.847L742.869 328.777L783.843 350.236L783.86 355.307Z" fill="#B48DB8"/>
                <path className="code_2" id="path368_2" d="M783.86 355.307L742.886 333.847L742.869 328.776L783.843 350.236L783.86 355.307Z" fill="##FB7D5D"/>
                <path className="code" id="path370" d="M803.663 449.094L797.881 446.041L797.876 444.724L803.658 447.778L803.663 449.094Z" fill="#B48DB8"/>
                <path className="code" id="path372" d="M797.032 445.505L791.247 442.454L791.243 441.137L797.028 444.188L797.032 445.505Z" fill="#B48DB8"/>
                <path id="path374" d="M811.374 452.684C811.379 453.972 810.391 454.495 809.167 453.85C807.946 453.205 806.952 451.637 806.947 450.347C806.943 449.06 807.93 448.536 809.151 449.182C810.375 449.827 811.37 451.394 811.374 452.684Z" fill="#A27FB0"/>
                <path id="path376" d="M808.39 450.3C808.393 451.172 809.103 452.296 809.884 452.708C809.931 451.86 809.217 450.736 808.436 450.321L808.39 450.3ZM810.158 455.447C809.594 455.447 809.02 455.294 808.452 454.993C806.782 454.112 805.513 452.116 805.507 450.347C805.499 448.14 807.709 446.903 809.868 448.037C811.544 448.923 812.808 450.919 812.814 452.685C812.819 454.311 811.729 455.447 810.158 455.447Z" fill="#B48DB8"/>
                </g>
                <g id="PCR">
                <path id="path378" d="M868.702 514.501L954.625 558.205C954.625 558.176 973.578 544.6 984.995 541.45L893.688 495.001C883.627 498.808 873.393 504.406 863.388 511.581L868.702 514.501Z" fill="#B48DB8"/>
                <path id="path380" d="M985.725 541.841C975.638 545.67 965.375 551.292 955.354 558.509C955.39 560.481 955.425 562.363 955.46 564.25C965.619 558.675 975.799 553.102 985.961 547.527C985.926 545.614 985.89 543.7 985.855 541.786L985.725 541.841Z" fill="#7C4F84"/>
                <path id="path382" d="M869.432 514.892L863.94 512.099C863.949 514.018 863.984 515.921 864.019 517.827L955.461 564.337C955.425 562.363 955.39 560.481 955.355 558.596L869.432 514.892Z" fill="#956B9B"/>
                <path id="path384" d="M918.004 490.986L918.63 524.96C918.646 525.8 919.269 526.629 920.494 527.256C922.946 528.502 926.882 528.444 929.287 527.127C930.488 526.464 931.081 525.617 931.065 524.776L930.439 490.803L918.004 490.986Z" fill="#A27FB0"/>
                <path id="path386" d="M954.348 525.121L948.521 522.158L948.497 520.842L954.324 523.807L954.348 525.121Z" fill="#B48DB8"/>
                <path id="path388" d="M961.777 528.9L955.949 525.937L955.925 524.621L961.752 527.586L961.777 528.9Z" fill="#B48DB8"/>
                <path id="path390" d="M969.207 532.68L963.377 529.717L963.353 528.401L969.183 531.366L969.207 532.68Z" fill="#B48DB8"/>
                <path id="path392" d="M988.607 435.607L830.959 355.396C830.072 354.947 829.255 354.808 828.576 354.932L824.124 357.245L826.743 361.545L828.466 454.986C828.512 457.511 830.506 460.551 832.921 461.779L988.633 541.005L989.505 544.395L992.847 542.461C994.074 542.284 994.879 541.281 994.849 539.639L993.056 442.399C993.01 439.875 991.019 436.835 988.607 435.607Z" fill="#7C4F84"/>
                <path id="path394" d="M986.983 543.957L829.332 463.746C826.921 462.521 824.927 459.48 824.88 456.956L823.087 359.714C823.066 358.553 823.461 357.704 824.124 357.245C824.909 356.704 826.066 356.701 827.371 357.364L985.022 437.574C987.433 438.805 989.424 441.845 989.47 444.367L991.263 541.609C991.31 544.133 989.394 545.185 986.983 543.957Z" fill="#956B9B"/>
                <path id="path396" d="M987.634 443.431L989.359 536.962C989.323 538.364 988.245 538.917 986.87 538.207L829.225 458C827.833 457.293 826.669 455.528 826.642 454.059L824.919 360.636C824.904 359.832 825.229 359.291 825.793 359.092C826.205 358.914 826.774 358.964 827.405 359.28L985.05 439.487C986.466 440.194 987.607 441.977 987.634 443.431Z" fill="#B48DB8"/>
                <path id="path398" d="M987.628 443.423L989.353 536.954C988.916 537.114 988.348 537.048 987.737 536.732L830.091 456.522C828.699 455.813 827.535 454.053 827.508 452.578L825.784 359.084C826.199 358.903 826.765 358.953 827.399 359.269L985.047 439.477C986.46 440.183 987.601 441.969 987.628 443.423Z" fill="#190128"/>
                <g id="Group_10">
                <path id="path400" d="M845.049 444.606L872.691 458.564L899.608 443.905L871.966 429.945L845.049 444.606ZM872.759 462.227C872.433 462.232 872.109 462.163 871.815 462.011L840.399 446.148C839.814 445.852 839.446 445.297 839.435 444.689C839.424 444.078 839.771 443.515 840.344 443.203L870.969 426.528C871.539 426.21 872.257 426.2 872.839 426.501L904.261 442.364C904.843 442.659 905.211 443.214 905.222 443.822C905.233 444.428 904.886 444.996 904.316 445.309L873.688 461.983C873.4 462.144 873.079 462.222 872.759 462.227Z" fill="url(#paint39_linear_44_2485)"/>
                <path id="path402" d="M844.631 421.939L872.273 435.896L899.19 421.238L871.548 407.275L844.631 421.939ZM872.341 439.56C872.015 439.565 871.691 439.495 871.397 439.344L839.981 423.478C839.396 423.185 839.028 422.627 839.017 422.022C839.006 421.411 839.353 420.846 839.926 420.536L870.551 403.853C871.121 403.541 871.839 403.53 872.421 403.825L903.843 419.697C904.425 419.99 904.793 420.547 904.804 421.155C904.815 421.761 904.468 422.329 903.898 422.639L873.27 439.316C872.982 439.476 872.661 439.555 872.341 439.56Z" fill="url(#paint40_linear_44_2485)"/>
                <path id="path404" d="M843.158 443.65L870.788 457.6L870.364 438.879L842.731 424.93L843.158 443.65ZM872.759 462.227C872.433 462.232 872.109 462.162 871.815 462.011L840.399 446.147C839.814 445.852 839.452 445.299 839.435 444.697L838.921 422.038C838.904 421.43 839.252 420.859 839.825 420.546C840.401 420.231 841.114 420.221 841.698 420.519L873.12 436.385C873.705 436.678 874.07 437.23 874.084 437.835L874.595 460.494C874.612 461.1 874.262 461.671 873.691 461.983C873.4 462.143 873.082 462.222 872.759 462.227Z" fill="url(#paint41_linear_44_2485)"/>
                <path id="path406" d="M873.782 426.96L901.412 440.915L900.986 422.194L873.355 408.237L873.782 426.96ZM903.383 445.542C903.063 445.547 902.736 445.472 902.442 445.326L871.023 429.457C870.441 429.164 870.076 428.609 870.059 428.004L869.545 405.348C869.531 404.74 869.881 404.169 870.452 403.854C871.028 403.544 871.74 403.528 872.325 403.826L903.744 419.697C904.329 419.99 904.694 420.543 904.708 421.148L905.222 443.807C905.239 444.415 904.892 444.986 904.318 445.298C904.03 445.453 903.709 445.537 903.383 445.542Z" fill="url(#paint42_linear_44_2485)"/>
                <path id="path408" d="M874.396 438.82L874.657 457.543L901.758 442.787L901.497 424.063L874.396 438.82ZM872.863 462.225C872.535 462.23 872.213 462.161 871.92 462.009C871.335 461.714 870.967 461.153 870.959 460.548L870.634 437.886C870.629 437.281 870.973 436.718 871.546 436.408L902.364 419.624C902.943 419.315 903.655 419.304 904.237 419.597C904.824 419.892 905.193 420.453 905.201 421.061L905.52 443.723C905.525 444.325 905.183 444.888 904.607 445.201L873.793 461.982C873.508 462.142 873.183 462.221 872.863 462.225Z" fill="url(#paint43_linear_44_2485)"/>
                </g>
                <g id="Group_11">
                <path id="path410" d="M908.178 475.815L935.82 489.775L962.734 475.114L935.095 461.157L908.178 475.815ZM935.888 493.439C935.562 493.443 935.238 493.372 934.944 493.223L903.525 477.357C902.94 477.064 902.572 476.509 902.561 475.898C902.55 475.293 902.897 474.725 903.47 474.415L934.098 457.737C934.668 457.422 935.386 457.411 935.971 457.71L967.387 473.576C967.969 473.868 968.337 474.424 968.348 475.031C968.359 475.639 968.012 476.208 967.442 476.518L936.817 493.195C936.529 493.353 936.208 493.434 935.888 493.439Z" fill="url(#paint44_radial_44_2485)"/>
                <path id="path414" d="M936.91 458.172L959.671 469.668L936.532 441.753L936.91 458.172ZM966.509 476.751C966.186 476.756 965.864 476.689 965.568 476.535L934.151 460.663C933.57 460.371 933.205 459.818 933.188 459.215L932.674 436.556C932.652 435.819 933.166 435.158 933.933 434.914C934.699 434.673 935.55 434.914 936.038 435.499L967.971 474.027C968.504 474.67 968.468 475.561 967.892 476.165C967.532 476.543 967.024 476.743 966.509 476.751Z" fill="url(#paint45_radial_44_2485)"/>
                <path id="path412" d="M907.153 475.299L933.911 488.814L932.884 441.788L907.153 475.299ZM935.888 493.439C935.562 493.443 935.238 493.372 934.944 493.223L903.525 477.357C903.064 477.125 902.73 476.723 902.608 476.254C902.489 475.783 902.593 475.295 902.897 474.896L933.106 435.545C933.567 434.943 934.403 434.675 935.187 434.896C935.962 435.109 936.497 435.752 936.514 436.489L937.724 491.704C937.741 492.311 937.39 492.88 936.82 493.195C936.529 493.353 936.211 493.434 935.888 493.439Z" fill="url(#paint46_radial_44_2485)"/>
                </g>
                <path id="path416" d="M976.632 536.459L970.805 533.494L970.781 532.178L976.608 535.146L976.632 536.459Z" fill="#B48DB8"/>
                <path id="path418" d="M969.946 532.968L964.119 530.003L964.094 528.689L969.922 531.652L969.946 532.968Z" fill="#B48DB8"/>
                <path id="path420" d="M984.398 539.936C984.422 541.223 983.442 541.764 982.209 541.134C980.978 540.507 979.96 538.954 979.936 537.667C979.912 536.377 980.892 535.842 982.123 536.469C983.356 537.093 984.374 538.646 984.398 539.936Z" fill="#A27FB0"/>
                <path id="path422" d="M981.376 537.598C981.392 538.47 982.122 539.581 982.909 539.984C982.94 539.132 982.213 538.019 981.425 537.618L981.376 537.598ZM983.227 542.716C982.66 542.724 982.084 542.579 981.511 542.286C979.826 541.431 978.529 539.454 978.497 537.688C978.456 535.478 980.644 534.211 982.823 535.313C984.512 536.172 985.805 538.151 985.838 539.914C985.868 541.54 984.795 542.693 983.227 542.716Z" fill="#B48DB8"/>
                </g>
                <g id="Group_13">
                <path id="path768" d="M851.175 531.773C848.02 532.055 842.536 534.564 842.559 541.422C842.582 548.285 849.634 554.402 852.789 554.73C855.94 555.058 858.911 555.294 862.936 551.381C866.114 548.291 868.979 538.782 863.764 534.774C860.783 532.481 858.216 531.138 851.175 531.773Z" fill="#1B8E27"/>
                <path id="path770" d="M850.687 532.959C851.998 530.734 842.535 534.371 842.555 540.393C842.576 546.413 848.764 551.782 851.532 552.068C854.296 552.354 856.903 552.562 860.435 549.128C863.222 546.419 865.736 538.075 861.163 534.559C860.124 533.761 857.628 534.419 855.244 535.08C851.617 536.082 848.255 537.084 850.687 532.959Z" fill="#157D1F"/>
                <path id="path772" d="M846.969 537.268C846.03 537.353 844.403 538.096 844.41 540.137C844.417 542.175 846.512 543.997 847.449 544.092C848.383 544.19 849.268 544.261 850.462 543.098C851.408 542.178 852.259 539.352 850.71 538.162C849.824 537.48 849.06 537.081 846.969 537.268Z" fill="#48A050"/>
                <path id="path774" d="M853.173 533.937C853.173 533.937 851.764 530.132 852.507 528.813C853.251 527.497 853.251 527.497 853.251 527.497L854.553 528.179C854.553 528.179 853.325 528.858 853.158 529.503C852.995 530.146 853.173 533.937 853.173 533.937Z" fill="#6D8A42"/>
                </g>
                <g id="Group_12">
                <path id="path776" d="M796.616 573.319C802.034 576.159 810.833 576.146 816.27 573.288C821.704 570.43 821.717 565.812 816.296 562.972C810.875 560.13 802.076 560.143 796.642 563.001C791.209 565.859 791.195 570.477 796.616 573.319Z" fill="#DFDFDF"/>
                <path id="path778" d="M820.352 567.871L792.556 567.87L792.483 546.1L820.278 546.101L820.352 567.871Z" fill="#DFDFDF"/>
                <path id="path780" d="M796.541 550.999C801.959 553.838 810.758 553.825 816.195 550.967C821.628 548.11 821.642 543.491 816.221 540.652C810.8 537.812 802.001 537.825 796.567 540.683C791.133 543.541 791.12 548.159 796.541 550.999Z" fill="#CDCCCC"/>
                <path id="path782" d="M794.174 545.873C794.176 546.552 794.461 547.229 795.001 547.871C795.544 548.516 796.348 549.124 797.382 549.666C799.736 550.904 802.911 551.583 806.313 551.583C809.75 551.583 812.958 550.891 815.344 549.638C816.415 549.075 817.247 548.427 817.797 547.742C818.316 547.105 818.587 546.442 818.585 545.783C818.58 544.411 817.444 543.066 815.379 541.984C813.022 540.75 809.851 540.07 806.448 540.07C803.011 540.07 799.804 540.76 797.418 542.018C795.354 543.102 794.169 544.506 794.174 545.873Z" fill="#DFDFDF"/>
                <path id="path784" d="M795.001 547.871C795.544 548.516 796.348 549.124 797.382 549.666C799.736 550.903 802.911 551.583 806.313 551.583C809.75 551.583 812.958 550.89 815.344 549.637C816.415 549.074 817.247 548.426 817.797 547.742C817.254 547.097 816.45 546.486 815.416 545.944C813.059 544.707 809.89 544.027 806.485 544.027C803.048 544.027 799.843 544.72 797.454 545.975C796.383 546.538 795.554 547.186 795.001 547.871Z" fill="#281315"/>
                <path id="path786" d="M792.922 552.32L795.019 553.42L792.512 554.874C790.991 555.678 788.424 558.559 788.43 560.151L788.22 562.58C788.229 565.123 789.407 566.347 791.657 566.144L792.968 566.022L795.066 567.122L791.832 569.639C789.413 569.737 786.284 566.95 786.216 564.201L786.119 560.28C786.065 558.131 787.658 555.466 789.73 554.229L792.922 552.32Z" fill="#CDCCCC"/>
                <path id="path788" d="M795.02 553.42L795.026 555.458L792.765 556.648C791.241 557.449 790.012 559.389 790.017 560.983L790.026 563.379C790.034 565.922 791.505 567.445 793.755 567.241L795.066 567.122L795.074 569.523L792.376 569.634C789.957 569.731 788.381 568.05 788.311 565.3L788.216 561.38C788.162 559.228 789.537 556.566 791.609 555.326L795.02 553.42Z" fill="#DFDFDF"/>
                </g>
                </g>
                <g id="person">
                <g id="g434">
                <g id="stolicka">
                <path id="path428" d="M590.21 548.882C589.561 548.853 588.855 548.949 588.109 549.187C587.582 549.354 587.034 549.584 586.471 549.888L580.562 553.074L526.291 582.336C526.044 582.471 525.785 582.627 525.518 582.796C525.039 583.114 524.821 583.27 524.597 583.436C524.169 583.756 523.992 583.893 523.816 584.036L523.278 584.478C522.913 584.782 522.539 585.104 522.164 585.445L521.704 585.863C515.147 591.928 507.09 602.453 507.09 602.453C506.038 604.196 505.79 605.081 505.933 605.472L496.303 600.315C495.483 600.461 495.014 599.944 496.762 597.04C496.762 597.04 509.486 580.425 515.965 576.927L576.143 544.478C577.395 543.806 579.011 543.848 580.738 544.391L584.193 546.026L590.21 548.882Z" fill="#C4A1BA"/>
                <path id="path440" d="M709.828 822.363C709.563 822.574 709.268 822.733 708.943 822.842L709.828 822.363Z" fill="#1E3667"/>
                <path id="path442" d="M702.664 825.879C702.664 827.597 702.167 828.727 701.341 829.381C700.215 830.277 698.468 830.303 696.485 829.253C692.981 827.398 690.06 822.875 689.968 819.152C689.944 818.2 690.109 817.394 690.425 816.755C690.816 815.946 691.446 815.401 692.246 815.147C693.312 814.808 694.667 814.992 696.15 815.775C696.8 816.12 697.432 816.559 698.026 817.068C700.043 818.782 701.668 821.299 702.336 823.749C702.495 824.333 702.6 824.907 702.643 825.472L702.664 825.879Z" fill="#2E1238"/>
                <path id="path444" d="M703.206 823.067C703.23 824.016 703.068 824.825 702.751 825.469C702.709 824.905 702.604 824.331 702.444 823.747C701.774 821.297 700.144 818.78 698.121 817.066C697.525 816.557 696.892 816.119 696.24 815.773C694.753 814.99 693.394 814.807 692.335 815.14C691.523 815.399 690.89 815.944 690.498 816.753L690.473 816.341C690.42 814.203 691.321 812.792 692.761 812.336C693.785 812.016 695.078 812.169 696.492 812.875C697.328 813.313 697.959 813.751 698.555 814.258C700.581 815.973 702.208 818.49 702.877 820.936C703.078 821.662 703.189 822.378 703.206 823.067Z" fill="#562C77"/>
                <path id="path446" d="M711.12 818.855C711.144 819.806 710.982 820.614 710.665 821.257C710.445 821.707 710.153 822.073 709.792 822.354L708.913 822.833L702.93 826.087C702.925 825.747 702.919 825.61 702.907 825.471C703.224 824.827 703.386 824.018 703.362 823.07C703.345 822.38 703.233 821.664 703.033 820.938C702.362 818.492 700.733 815.976 698.706 814.26C698.109 813.754 697.477 813.316 696.822 812.97C695.225 812.171 693.931 812.018 692.913 812.336L699.646 808.674C700.781 807.73 702.56 807.689 704.58 808.753C708.101 810.612 711.028 815.136 711.12 818.855Z" fill="#925F97"/>
                <path id="path448" d="M710.604 821.67C710.644 823.284 710.143 824.486 709.269 825.171L708.388 825.65L701.493 829.389C702.325 828.735 702.825 827.605 702.827 826.096L708.826 822.842L709.705 822.363C710.069 822.082 710.362 821.716 710.582 821.266L710.604 821.67Z" fill="#3C0A59"/>
                <path id="path450" d="M555.927 741.781C555.665 741.99 555.368 742.151 555.041 742.26L555.927 741.781Z" fill="#1E3667"/>
                <path id="path452" d="M548.765 745.298C548.762 747.015 548.269 748.144 547.44 748.797C546.314 749.696 544.567 749.724 542.586 748.671C539.079 746.817 536.162 742.293 536.069 738.568C536.046 737.619 536.208 736.81 536.523 736.171C536.917 735.367 537.55 734.817 538.347 734.565C539.412 734.226 540.766 734.41 542.252 735.194C542.9 735.539 543.53 735.978 544.124 736.484C546.144 738.2 547.768 740.717 548.434 743.168C548.593 743.749 548.697 744.325 548.742 744.891L548.765 745.298Z" fill="#2E1238"/>
                <path id="path454" d="M549.308 742.486C549.332 743.435 549.167 744.246 548.851 744.888C548.806 744.323 548.702 743.747 548.541 743.166C547.874 740.714 546.246 738.198 544.219 736.482C543.623 735.976 542.992 735.537 542.341 735.192C540.852 734.408 539.493 734.225 538.435 734.558C537.626 734.815 536.991 735.365 536.596 736.169L536.574 735.759C536.521 733.619 537.422 732.21 538.861 731.755C539.886 731.432 541.177 731.587 542.595 732.293C543.427 732.729 544.059 733.167 544.655 733.676C546.68 735.389 548.308 737.906 548.977 740.357C549.177 741.081 549.291 741.797 549.308 742.486Z" fill="#562C77"/>
                <path id="path456" d="M557.222 738.273C557.246 739.222 557.08 740.033 556.762 740.675C556.544 741.124 556.252 741.492 555.892 741.772L555.01 742.251L549.032 745.503C549.026 745.162 549.02 745.027 549.007 744.89C549.323 744.248 549.488 743.436 549.464 742.488C549.447 741.798 549.333 741.083 549.133 740.359C548.463 737.908 546.833 735.391 544.806 733.678C544.209 733.169 543.576 732.731 542.923 732.388C541.324 731.589 540.032 731.434 539.013 731.752L545.747 728.093C546.882 727.149 548.661 727.105 550.681 728.171C554.202 730.03 557.129 734.553 557.222 738.273Z" fill="#925F97"/>
                <path id="path458" d="M556.705 741.088C556.745 742.702 556.244 743.904 555.371 744.589L554.489 745.066L547.592 748.804C548.427 748.151 548.923 747.022 548.929 745.511L554.924 742.26L555.804 741.781C556.169 741.501 556.462 741.133 556.68 740.684L556.705 741.088Z" fill="#3C0A59"/>
                <path id="path460" d="M556.21 822.379C555.948 822.59 555.651 822.749 555.323 822.857L556.21 822.379Z" fill="#1E3667"/>
                <path id="path462" d="M549.048 825.895C549.045 827.612 548.552 828.742 547.723 829.397C546.597 830.292 544.851 830.318 542.869 829.268C539.362 827.413 536.445 822.89 536.352 819.167C536.329 818.216 536.492 817.409 536.806 816.77C537.2 815.961 537.833 815.416 538.63 815.162C539.695 814.823 541.049 815.007 542.535 815.79C543.183 816.136 543.813 816.574 544.407 817.083C546.428 818.797 548.051 821.314 548.717 823.764C548.876 824.348 548.98 824.922 549.026 825.487L549.048 825.895Z" fill="#2E1238"/>
                <path id="path464" d="M549.591 823.083C549.615 824.031 549.451 824.841 549.134 825.485C549.089 824.92 548.985 824.347 548.825 823.763C548.157 821.312 546.529 818.795 544.502 817.082C543.906 816.572 543.275 816.134 542.624 815.789C541.135 815.006 539.777 814.822 538.718 815.155C537.909 815.415 537.274 815.96 536.879 816.769L536.858 816.356C536.804 814.219 537.705 812.807 539.144 812.352C540.169 812.031 541.46 812.184 542.878 812.891C543.71 813.329 544.342 813.767 544.938 814.273C546.963 815.989 548.592 818.506 549.26 820.951C549.461 821.678 549.574 822.394 549.591 823.083Z" fill="#562C77"/>
                <path id="path466" d="M557.505 818.871C557.529 819.822 557.363 820.63 557.045 821.272C556.827 821.723 556.535 822.089 556.175 822.37L555.293 822.849L549.315 826.103C549.309 825.763 549.303 825.625 549.29 825.487C549.606 824.843 549.77 824.034 549.747 823.085C549.73 822.396 549.616 821.68 549.416 820.954C548.746 818.508 547.116 815.992 545.089 814.276C544.492 813.77 543.859 813.331 543.206 812.985C541.607 812.187 540.315 812.034 539.296 812.352L546.03 808.69C547.165 807.746 548.944 807.705 550.964 808.769C554.485 810.627 557.412 815.151 557.505 818.871Z" fill="#925F97"/>
                <path id="path468" d="M556.988 821.686C557.028 823.3 556.527 824.502 555.654 825.187L554.772 825.666L547.875 829.405C548.71 828.751 549.206 827.62 549.212 826.112L555.206 822.857L556.087 822.379C556.451 822.098 556.745 821.731 556.963 821.281L556.988 821.686Z" fill="#3C0A59"/>
                <path id="path470" d="M709.545 741.765C709.28 741.974 708.985 742.135 708.66 742.244L709.545 741.765Z" fill="#1E3667"/>
                <path id="path472" d="M702.381 745.281C702.381 746.998 701.884 748.127 701.058 748.78C699.931 749.68 698.185 749.707 696.201 748.655C692.695 746.798 689.777 742.276 689.685 738.551C689.661 737.602 689.826 736.794 690.142 736.154C690.533 735.348 691.163 734.801 691.963 734.549C693.029 734.21 694.384 734.394 695.867 735.177C696.517 735.523 697.149 735.961 697.743 736.468C699.76 738.184 701.385 740.7 702.053 743.152C702.212 743.733 702.317 744.309 702.359 744.874L702.381 745.281Z" fill="#2E1238"/>
                <path id="path474" d="M702.926 742.47C702.95 743.418 702.785 744.229 702.468 744.871C702.426 744.306 702.32 743.73 702.161 743.149C701.491 740.698 699.861 738.181 697.838 736.466C697.242 735.959 696.608 735.521 695.957 735.175C694.469 734.392 693.111 734.208 692.052 734.542C691.239 734.799 690.607 735.346 690.215 736.152L690.193 735.743C690.14 733.603 691.038 732.194 692.477 731.738C693.502 731.415 694.795 731.57 696.209 732.277C697.045 732.712 697.676 733.15 698.272 733.66C700.297 735.373 701.925 737.889 702.594 740.34C702.794 741.061 702.909 741.78 702.926 742.47Z" fill="#562C77"/>
                <path id="path476" d="M710.837 738.257C710.861 739.206 710.699 740.017 710.382 740.659C710.162 741.109 709.869 741.476 709.509 741.756L708.63 742.235L702.647 745.487C702.642 745.146 702.635 745.011 702.623 744.874C702.941 744.232 703.106 743.421 703.082 742.472C703.065 741.783 702.95 741.064 702.75 740.343C702.079 737.892 700.45 735.375 698.422 733.662C697.826 733.153 697.194 732.715 696.542 732.372C694.941 731.573 693.647 731.418 692.63 731.736L699.363 728.077C700.498 727.133 702.277 727.089 704.297 728.155C707.818 730.014 710.745 734.538 710.837 738.257Z" fill="#925F97"/>
                <path id="path478" d="M710.321 741.072C710.361 742.686 709.86 743.888 708.987 744.573L708.105 745.049L701.21 748.788C702.042 748.134 702.542 747.006 702.544 745.495L708.543 742.244L709.422 741.765C709.786 741.485 710.08 741.117 710.3 740.668L710.321 741.072Z" fill="#3C0A59"/>
                <path id="path480" d="M704.346 725.602C703.589 725.454 701.178 723.624 700.208 723.44C676.598 718.925 649.533 724.869 622.678 739.297C595.719 753.78 568.969 776.814 546.128 806.406C544.275 808.805 543.776 811.667 544.979 812.739C545.842 813.509 548.534 814.381 549.117 814.901C550.363 816.012 552.719 815.011 554.457 812.764C576.102 784.717 601.454 762.892 627.002 749.164C652.453 735.492 678.097 729.861 700.474 734.136C702.276 734.478 704.617 732.95 705.734 730.628C706.892 728.224 706.266 725.967 704.346 725.602Z" fill="#AA80A0"/>
                <path id="path424" d="M594.064 556.997L580.59 613.249C580.59 613.249 575.488 617.679 573.964 617.527C573.519 617.371 573.441 616.999 573.666 616.267C574.918 612.169 578.479 610.001 579.249 604.707C579.814 600.845 586.978 572.922 590.825 558.077C592.005 553.517 589.299 550.843 585.498 552.803C583.779 553.689 581.832 554.694 579.716 555.789C560.912 565.535 528.731 582.481 525.016 586.205C519.724 591.502 508.312 604.997 508.312 604.997C508.312 604.997 506.268 606.327 505.965 605.49C505.823 605.099 506.07 604.214 507.119 602.47C507.119 602.47 515.157 591.944 521.698 585.877L522.157 585.459C522.531 585.118 522.904 584.796 523.267 584.492L523.804 584.05L524.33 583.638C524.807 583.284 525.025 583.128 525.237 582.985C525.769 582.641 526.028 582.485 526.274 582.35L580.412 553.083L586.307 549.897C586.869 549.592 587.416 549.362 587.941 549.195C588.685 548.957 589.388 548.907 590.037 548.89C594.323 548.792 596.961 551.855 594.064 556.997Z" fill="#A2BFEF"/>
                <path id="path482" d="M706.384 808.45C682.147 779.009 654.355 756.079 626.774 741.628C599.085 727.122 571.605 721.16 548.133 725.729C547.173 725.914 544.852 727.754 544.106 727.897C542.201 728.266 541.687 730.524 542.921 732.841C544.202 735.246 546.621 736.773 548.408 736.428C570.65 732.098 596.691 737.747 622.93 751.494C649.07 765.191 675.403 786.917 698.374 814.814C700.224 817.062 702.629 818.062 703.78 816.986C704.378 816.426 707.023 815.55 707.806 814.817C708.997 813.705 708.356 810.843 706.384 808.45Z" fill="#AA80A0"/>
                <path id="path484" d="M626.542 746.148C624.74 747.271 621.779 747.273 619.931 746.154C618.557 745.328 618.185 744.11 618.818 743.081L617.009 658.173L625.963 663.587L627.662 743.321C628.145 744.288 627.773 745.383 626.542 746.148Z" fill="#452751"/>
                </g>
                <g id="ja">
                <path id="rukaL" d="M616.83 501.795C616.83 501.795 628.876 503.729 632.804 502.755C636.732 501.779 647.642 500.077 651.351 500.061C655.061 500.04 655.917 499.583 655.917 499.583L677.921 490.019L695.03 483.955C695.03 483.955 704.005 484.861 707.22 483.946C710.438 483.028 713.072 482.43 711.808 484.815C710.544 487.2 707.051 488.793 704.055 488.991C701.061 489.188 699.538 490.002 699.538 490.002L712.591 490.603C712.591 490.603 713.822 495.323 710.077 495.329C706.333 495.334 696.522 496.028 696.522 496.028C696.522 496.028 691.753 498.052 687.898 502.005C684.046 505.956 682.157 509.795 682.157 509.795C682.157 509.795 684.348 513.319 690.308 512.178C696.267 511.036 698.913 514.473 698.959 516.253C699.004 518.034 694.693 520.556 692.101 520.146C689.511 519.737 687.152 518.404 686.456 518.436C685.76 518.469 683.687 519.267 676.449 518.133C669.212 516.997 661.343 513.978 658.204 513.923C655.065 513.872 648.456 514.703 648.456 514.703C648.456 514.703 606.409 519.792 598.071 519.379C589.73 518.969 578.097 518.751 580.524 504.334C582.946 489.917 616.83 501.795 616.83 501.795Z" fill="#ED8D9B"/>
                <path id="path488" fillRule="evenodd" clipRule="evenodd" d="M645.648 605.047L653.129 700.606C653.064 701.438 653.377 702.073 654.136 702.487C657.527 704.347 668.533 701.227 678.712 695.516C682.926 693.157 685.056 623.891 687.372 621.716C688.585 620.93 688.347 592.534 688.347 592.534L645.648 605.047Z" fill="#2A3463"/>
                <path id="path490" d="M666.152 448.351C664.441 452.472 661.449 453.195 661.666 455.735C661.881 458.271 664.438 457.289 661.975 462.103C659.515 466.92 658.712 476.693 651.828 478.979L651.246 479.151C644.724 481.143 640.929 479.217 640.192 484.263C639.4 489.48 636.94 501.82 637.6 502.456C697.437 558.593 570.988 509.053 601.834 484.495L608.943 467.569L609.262 466.818C609.262 466.818 596.787 450.394 600.661 436.927C604.57 423.492 613.769 416.68 635.788 416.519C657.838 416.356 662.999 430.104 663.959 432.928C664.952 435.752 667.864 444.253 666.152 448.351Z" fill="#EC6379"/>
                <path id="path492" d="M667.146 448.341C665.412 452.461 662.383 453.185 662.603 455.724C662.82 458.259 665.41 457.277 662.916 462.09C660.425 466.905 659.611 476.675 652.64 478.961L652.051 479.133C651.95 478.969 649.354 479.338 645.662 479.709C636.433 480.633 620.352 481.565 619.209 474.172C618.058 466.696 612.774 470.75 609.209 467.554L609.533 466.803C609.533 466.803 596.899 450.384 600.822 436.921C604.78 423.49 614.095 416.68 636.394 416.519C658.724 416.356 663.952 430.1 664.924 432.923C665.93 435.746 668.879 444.245 667.146 448.341Z" fill="#ED8D9B"/>
                <path id="path494" d="M600.061 584.764L592.138 584.77L592.19 586.832C592.116 587.434 592.512 588.057 593.394 588.518C594.962 589.336 597.468 589.334 598.994 588.514C599.854 588.051 600.217 587.428 600.093 586.826L600.061 584.764Z" fill="#879ADE"/>
                <path id="path496" d="M598.986 586.243C597.459 587.068 594.952 587.07 593.383 586.247C591.813 585.433 591.779 584.102 593.308 583.28C594.835 582.457 597.343 582.455 598.911 583.275C600.479 584.095 600.513 585.426 598.986 586.243Z" fill="#99AFF0"/>
                <path id="path498" d="M627.592 626.771L619.669 626.777L619.722 628.842C619.648 629.447 620.046 630.064 620.928 630.526C622.493 631.345 625.003 631.343 626.528 630.521C627.385 630.058 627.749 629.44 627.627 628.836L627.592 626.771Z" fill="#879ADE"/>
                <path id="path500" d="M626.52 628.256C624.993 629.075 622.483 629.077 620.918 628.26C619.347 627.44 619.313 626.11 620.843 625.29C622.366 624.468 624.874 624.466 626.445 625.286C628.01 626.103 628.044 627.433 626.52 628.256Z" fill="#99AFF0"/>
                <path id="path502" fillRule="evenodd" clipRule="evenodd" d="M702.289 583.228C683.823 577.41 652.848 592.656 629.163 603.538C631.087 622.29 636.043 640.678 640.041 659.191C657.732 653.441 671.872 635.722 692.886 621.607L712.911 611.999C713.791 592.571 712.077 586.306 702.289 583.228Z" fill="#2A3463"/>
                <path id="path504" fillRule="evenodd" clipRule="evenodd" d="M660.776 681.685L646.278 692.08C646.768 704.567 646.892 710.714 652.238 713.961C658.74 717.916 669.47 714.713 675.94 711.953L677.576 707.114C679.622 706.851 680.855 706.858 681.82 706.865C683.805 706.882 684.667 706.9 689.184 704.562C700.419 698.749 716.923 689.763 718.892 679.381C719.397 676.724 717.053 671.933 714.155 672.398L687.574 680.961L660.776 681.685Z" fill="#898989"/>
                <path id="path506" fillRule="evenodd" clipRule="evenodd" d="M725.339 724.624L710.354 734.432C710.271 746.919 710.11 753.056 715.314 756.505C721.64 760.704 732.529 757.928 739.125 755.425L740.985 750.657C749.924 749.858 747.501 751.114 756.502 746.769C767.392 741.516 780.61 734.107 782.797 724.93C783.426 722.297 781.3 717.448 778.377 717.78L759.623 725.524L725.339 724.624Z" fill="#898989"/>
                <path id="path508" fillRule="evenodd" clipRule="evenodd" d="M746.136 606.127C744.559 614.593 723.244 632.062 721.295 640.452C721.295 640.452 713.403 737.806 713.885 738.265C716.661 740.914 743.224 745.467 746.471 725.108C757.5 722.369 770.043 625.71 770.043 625.71C775.962 605.365 751.356 588.069 746.136 606.127Z" fill="#190128"/>
                <path id="path510" d="M747.492 663.208L698.32 677.374L668.552 698.861L636.771 708.869L629.605 701.998L625.367 697.931L629.331 661.065L630.593 649.314L621.684 620.874L616.767 598.966C621.038 598.646 624.69 598.923 626.57 600.073L747.492 663.208Z" fill="#562C77"/>
                <path id="path512" fillRule="evenodd" clipRule="evenodd" d="M605.118 606.752L566.75 605.413C562.63 624.54 565.785 647.143 575.63 656.35C589.835 669.621 617.101 687.615 643.771 681.974C663.574 677.78 697.38 659.062 720.159 643.927L770.25 623.554C779.352 606.094 784.061 595.176 757.294 589.96C738.068 586.216 687.931 605.116 664.007 615.986L605.118 606.752Z" fill="#190128"/>
                <path id="path514" d="M655.643 659.564C652.191 660.914 647.542 660.852 642.331 659.958C622.436 656.644 569.232 640.24 569.417 608.332C569.495 594.942 579.504 592.82 564.995 558.363C536.979 491.831 574.131 473.691 581.305 473.685C588.615 473.679 601.565 479.189 601.565 479.189C601.565 479.189 592.955 491.698 606.258 499.314C627.946 511.663 628.417 505.513 635.84 504.654C644.438 503.656 657.661 515.767 665.166 522.768C679.536 536.178 660.17 577.272 666.243 588.099C672.32 598.989 677.595 624.556 677.595 624.556C677.595 624.556 683.995 648.648 655.643 659.564Z" fill="#3C3C3C"/>
                <path id="path516" d="M656.106 659.612C652.723 660.963 648.166 660.9 643.059 660.006C636.147 648.411 637.236 624.053 630.242 603.417C619.865 572.914 628.505 531.373 642.944 527.579C644.409 527.191 645.811 527.063 647.154 527.189C651.584 530.455 655.267 533.208 656.363 534.233C658.622 536.346 659.734 540.769 660.072 546.409C660.184 548.33 660.235 550.447 660.157 552.691C660.039 558.908 660.549 577.305 666.5 588.134C672.456 599.026 677.625 624.598 677.625 624.598C677.625 624.598 683.897 648.694 656.106 659.612Z" fill="#3C3C3C"/>
                <path id="path520" d="M679.919 573.95C679.919 573.95 685.603 565.403 695.846 568.016C706.087 570.626 716.423 584.085 715.199 592.518C713.98 600.95 703.423 618.434 691.962 617.754C680.503 617.074 667.96 586.677 679.919 573.95Z" fill="#3C3C3C"/>
                <path id="path522" d="M636.731 544.513C637.3 562.577 663.801 632.466 689.82 620.017C715.836 607.566 692.621 580.171 688.602 570.611C684.58 561.053 681.066 521.87 662.728 520.65C644.389 519.431 636.159 526.449 636.731 544.513Z" fill="#3C3C3C"/>
                <path id="path524" d="M648.438 462.86C647.986 462.834 649.756 458.993 646.159 460.555C642.56 462.117 641.079 464.126 640.573 466.799C640.017 469.724 640.065 476.728 642.132 475.309C644.202 473.889 646.385 469.777 646.385 469.777C646.385 469.777 645.152 469.778 643.801 469.78C642.448 469.781 643.699 464.803 644.46 463.828C647.495 459.946 648.438 462.86 648.438 462.86Z" fill="#EC6379"/>
                <path id="path526" d="M627.178 660.966L623.253 697.843L627.449 701.911L627.495 708.789L512.997 648.451L512.724 647.783C512.129 647.593 511.57 647.364 511.049 647.087C492.837 637.407 506.684 615.144 506.241 597.28C505.799 579.418 492.99 548.843 492.379 542.34C491.774 535.838 493.993 530.84 495.012 531.38L613.773 594.503L614.741 598.849L619.608 620.763L627.134 654.632L627.178 660.966Z" fill="#C4A1BA"/>
                <path id="path528" d="M615.812 594.618C615.812 594.618 636.868 643.476 636.46 654.191C636.051 664.903 624.109 696.393 636.782 703.064C649.458 709.737 705.209 672.794 714.327 667.852C723.443 662.908 747.677 658.796 747.84 665.295C747.926 668.732 744.523 668.404 739.912 668.08C735.799 667.79 730.727 667.498 726.321 669.887C716.984 674.951 650.391 719.968 632.007 710.293C613.623 700.615 627.6 678.359 627.153 660.499C626.706 642.642 613.771 612.073 613.154 605.572C612.543 599.071 614.785 594.077 615.812 594.618Z" fill="#925F97"/>
                <path id="path530" d="M726.012 628.454L712.555 684.704C712.555 684.704 707.455 689.135 705.928 688.986C705.481 688.825 705.406 688.455 705.63 687.718C706.881 683.626 710.441 681.454 711.213 676.16C711.774 672.301 718.931 644.382 722.774 629.532C723.953 624.974 721.25 622.301 717.447 624.261C715.729 625.147 713.783 626.153 711.664 627.25C692.869 636.993 660.7 653.942 656.985 657.669C651.695 662.967 640.289 676.46 640.289 676.46C640.289 676.46 638.244 677.79 637.943 676.956C637.799 676.562 638.048 675.677 639.095 673.933C639.095 673.933 647.13 663.406 653.668 657.342L654.124 656.924C654.502 656.586 654.872 656.258 655.236 655.954L655.775 655.512L656.299 655.103C656.777 654.746 656.994 654.592 657.205 654.449C657.737 654.103 657.996 653.95 658.242 653.815L712.366 624.537L718.255 621.352C718.82 621.051 719.367 620.818 719.889 620.654C720.633 620.418 721.335 620.32 721.985 620.346C725.253 620.462 727.154 623.678 726.012 628.454Z" fill="#925F97"/>
                <path id="path532" d="M722.78 629.535C719.051 644.394 712.105 672.33 711.56 676.192C710.811 681.489 707.358 683.661 706.144 687.756C705.926 688.494 705.998 688.864 706.273 688.982C704.894 688.656 695.016 686.156 696.151 682.349C697.365 678.249 700.819 676.076 701.567 670.782C702.077 667.174 708.163 642.59 712.002 627.253C714.058 626.154 715.946 625.148 717.613 624.262C721.302 622.3 723.924 624.975 722.78 629.535Z" fill="#C4A1BA"/>
                <path id="path534" d="M722.172 620.337C721.52 620.311 720.817 620.41 720.071 620.645C719.547 620.809 718.999 621.042 718.433 621.344L712.528 624.528L658.263 653.801C658.017 653.935 657.757 654.089 657.492 654.261C657.012 654.578 656.795 654.731 656.569 654.901C656.141 655.223 655.964 655.358 655.79 655.498L655.25 655.939C654.885 656.243 654.514 656.571 654.135 656.91L653.678 657.327C647.122 663.391 639.066 673.916 639.066 673.916C638.017 675.659 637.767 676.544 637.912 676.938L628.281 671.782C627.459 671.928 626.992 671.411 628.738 668.507C628.738 668.507 641.458 651.889 647.935 648.392L708.105 615.938C709.356 615.266 710.973 615.307 712.7 615.847L716.155 617.482L722.172 620.337Z" fill="#C4A1BA"/>
                <path id="path536" d="M633.5 480.225C633.5 480.225 630.5 456.957 646.5 453.986C654.709 450.532 671.999 436.659 660.5 417.846C657.5 415.37 655 407.944 625 411.905C615.5 413.885 598.76 417.664 597.842 438.629C596.573 467.481 609.566 478.498 633.5 480.225Z" fill="#030205"/>
                <path id="rukaR" d="M685.666 582.29C685.666 582.29 700.133 562.722 701.778 559.049C703.425 555.378 716.175 535.673 716.175 535.673L710.677 531.976C710.677 531.976 709.518 528.252 707.933 527.406C706.351 526.561 701.185 523.936 703.595 522.169C706.005 520.4 710.214 521.017 712.594 523.648C714.972 526.28 716.372 527.615 716.372 527.615L721.064 515.398L720.485 503.535C720.485 503.535 719.89 498.168 722.19 497.812C724.49 497.454 727.181 497.462 725.908 500.755C724.632 504.048 726.54 505.271 726.54 505.271L728.536 515.847L731.004 505.541C731.004 505.541 733.779 500.974 734.144 499.369C734.506 497.768 737.929 497.817 738.163 500.072C738.399 502.321 738.286 508.362 738.286 508.362L735.86 517.079L741.309 507.586L747.549 501.943C747.549 501.943 751.929 501.493 750.532 504.391C749.132 507.291 746.281 510.813 746.281 510.813L742.058 520.915L749.831 518.777L757.801 518.734C757.801 518.734 758.192 522.783 755.59 523.058C752.989 523.336 751.165 523.811 751.165 523.811L745.611 526.662C745.611 526.662 744.379 535.62 741.011 538.559C737.646 541.497 734.246 543.507 734.246 543.507C734.246 543.507 707.398 610.261 697.485 616.103C687.571 621.948 680.603 593.038 685.666 582.29Z" fill="#ED8D9B"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="g320">
                <g id="Group 27">
                <g id="HTML" onMouseOver={() => changeHoverID(4)}>
                <path id="path316_2" d="M168.337 393.842C167.674 393.827 167.009 393.802 166.342 393.766L166.34 393.766C165.581 393.727 164.826 393.672 164.075 393.607C198.26 394.292 227.155 368.809 227.924 335.673C228.693 302.551 201.04 275.892 166.877 275.114C166.859 275.114 166.845 275.114 166.828 275.113C167.58 275.08 168.337 275.057 169.095 275.048C169.879 275.039 170.653 275.045 171.43 275.063C178.047 275.213 184.425 276.328 190.401 278.267C194.986 279.757 199.336 281.733 203.376 284.129C204.105 284.562 204.826 285.008 205.533 285.468C210.784 288.872 215.459 293.009 219.396 297.732C220.8 299.419 222.111 301.181 223.32 303.009C225.777 306.728 227.813 310.727 229.359 314.949C229.978 316.642 230.52 318.374 230.98 320.135C231.967 323.931 232.568 327.876 232.746 331.93C232.8 333.2 232.814 334.483 232.784 335.774C232.772 336.282 232.753 336.786 232.728 337.289C232.528 341.323 231.91 345.24 230.91 349.005C230.45 350.745 229.908 352.45 229.289 354.122C227.763 358.25 225.767 362.16 223.369 365.8C222.237 367.518 221.017 369.174 219.712 370.766C216.072 375.206 211.782 379.138 206.986 382.441C203.217 385.038 199.135 387.245 194.81 389.007C192.995 389.746 191.136 390.408 189.239 390.989L189.25 391.001C189.193 391.019 189.136 391.034 189.076 391.049C188.972 391.078 188.865 391.107 188.76 391.138C188.32 391.269 187.875 391.39 187.433 391.511C186.916 391.652 186.399 391.791 185.877 391.92C185.431 392.032 184.98 392.136 184.527 392.238C184.001 392.357 183.473 392.469 182.941 392.574C182.49 392.664 182.038 392.752 181.585 392.833C181.042 392.928 180.496 393.016 179.948 393.099C179.762 393.128 179.574 393.155 179.387 393.184C179.126 393.221 178.865 393.258 178.601 393.292C178.036 393.368 177.468 393.429 176.898 393.488C176.46 393.533 176.022 393.582 175.582 393.62C175.237 393.648 174.892 393.671 174.545 393.694C174.287 393.71 174.028 393.726 173.77 393.739C173.357 393.763 172.947 393.794 172.532 393.809C171.854 393.836 171.17 393.84 170.488 393.846C170.142 393.85 169.797 393.861 169.449 393.858C169.08 393.857 168.708 393.851 168.337 393.842Z" fill="url(#paint47_radial_44_2485)"/>
                <path id="path436" d="M163.946 393.558C163.387 393.546 162.826 393.526 162.264 393.499C162.135 393.493 162.004 393.488 161.875 393.48C161.807 393.476 161.742 393.472 161.674 393.468C137.22 392.083 116.922 377.531 107.871 357.619C104.428 350.044 102.612 341.694 102.814 332.998C102.815 332.969 102.815 332.941 102.816 332.912C102.816 332.905 102.816 332.898 102.817 332.888C102.817 332.867 102.818 332.845 102.818 332.824C102.818 332.816 102.819 332.809 102.819 332.802C102.82 332.778 102.82 332.752 102.821 332.728C102.821 332.723 102.821 332.721 102.821 332.716C103.064 324.126 105.259 315.958 109.008 308.616C110.871 304.968 113.118 301.526 115.699 298.334C119.774 312.197 125.561 319.009 130.859 322.624C132.086 323.461 133.31 324.143 134.53 324.699L136.278 325.402L137.96 326.067L139.563 326.551L140.322 326.747L141.676 326.957L142.949 326.986C144.344 327.133 145.732 327.103 147.097 327.134C148.065 327.156 149.025 327.162 149.975 327.167C150.926 327.171 151.866 327.176 152.796 327.197C155.865 327.267 158.814 327.518 161.596 328.563L164.281 329.89L165.452 330.633L167.552 332.498C167.822 332.774 168.087 333.065 168.351 333.369C178.399 344.976 170.296 361.187 177.521 379.091C179.017 382.798 181.246 386.775 184.671 390.718C178.128 392.72 171.151 393.722 163.946 393.558Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_2" d="M163.957 393.449C163.394 393.436 162.833 393.416 162.267 393.389C162.829 393.416 163.39 393.436 163.949 393.448C171.153 393.612 178.131 392.61 184.674 390.608C181.249 386.665 179.02 382.688 177.523 378.981C170.299 361.077 178.401 344.866 168.354 333.259C168.089 332.955 167.824 332.664 167.555 332.388L165.372 330.452L164.45 329.894L161.598 328.453C158.816 327.408 155.868 327.157 152.798 327.087C151.868 327.066 150.929 327.061 149.978 327.057C149.028 327.052 148.068 327.047 147.099 327.024C145.735 326.993 144.353 326.929 142.958 326.782L141.426 326.747L138.13 326.07L134.532 324.589C133.313 324.033 132.088 323.351 130.861 322.514C125.564 318.899 119.777 312.087 115.702 298.224C124.186 287.737 136.293 279.978 150.293 276.683C154.888 275.603 159.684 275.005 164.626 274.948C165.383 274.939 166.143 274.942 166.894 274.959C166.911 274.96 166.925 274.96 166.942 274.96C201.106 275.738 228.758 302.397 227.99 335.519C227.22 368.656 198.326 394.138 164.141 393.453C164.079 393.451 164.019 393.45 163.957 393.449ZM102.819 332.802C102.819 332.795 102.819 332.785 102.819 332.778C102.819 332.788 102.819 332.795 102.819 332.802Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="HTML_2" d="M124.151 348.016C124.831 348.031 125.404 347.484 125.42 346.804L125.607 338.726L141.603 339.09L141.415 347.168C141.44 347.849 141.987 348.381 142.667 348.397C143.347 348.412 143.919 347.905 143.935 347.225L144.579 319.473C144.595 318.793 144.048 318.221 143.368 318.205C142.688 318.19 142.115 318.737 142.06 319.416L141.661 336.571L125.666 336.207L126.063 319.092C126.079 318.412 125.532 317.839 124.852 317.824C124.172 317.808 123.599 318.355 123.584 319.035L122.94 346.748C122.924 347.428 123.471 348 124.151 348.016ZM168.912 318.906L149.757 318.47C149.077 318.455 148.504 319.002 148.488 319.722C148.472 320.402 149.019 320.974 149.699 320.99L158.016 321.179L157.408 347.412C157.391 348.132 157.938 348.704 158.658 348.721C159.337 348.736 159.91 348.189 159.927 347.469L160.536 321.236L168.854 321.426C169.534 321.441 170.106 320.894 170.122 320.214C170.139 319.494 169.592 318.922 168.912 318.906ZM199.057 320.673C199.032 320.032 198.484 319.499 197.844 319.485C197.444 319.476 196.917 319.784 196.749 320.14L187.782 335.82L179.593 319.75C179.401 319.385 178.889 319.053 178.489 319.044C177.849 319.03 177.277 319.537 177.222 320.176L174.255 348.036C174.255 348.036 174.254 348.075 174.253 348.115C174.238 348.795 174.784 349.368 175.464 349.383C176.104 349.398 176.675 348.931 176.73 348.292L179.28 324.624L186.627 339.035C186.779 339.398 187.292 339.69 187.692 339.699C188.092 339.708 188.618 339.44 188.827 339.085L196.835 325.023L198.244 348.781C198.269 349.422 198.817 349.955 199.457 349.969C199.497 349.97 199.537 349.971 199.577 349.972C200.219 349.907 200.752 349.359 200.766 348.719L200.768 348.639L199.057 320.673ZM219.168 347.657L205.971 347.397L206.585 320.924C206.601 320.244 206.054 319.672 205.374 319.656C204.694 319.641 204.122 320.188 204.106 320.868L203.463 348.58C203.456 348.86 203.607 349.264 203.802 349.468C203.997 349.673 204.394 349.842 204.673 349.848L219.111 350.137C219.79 350.152 220.363 349.605 220.379 348.925C220.395 348.245 219.848 347.673 219.168 347.657Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="CSS" onMouseOver={() => changeHoverID(3)} > 
                <path id="path316_3" d="M324.63 426.121C323.966 426.106 323.301 426.082 322.634 426.045L322.632 426.045C321.873 426.006 321.118 425.951 320.367 425.886C354.553 426.571 383.447 401.089 384.217 367.952C384.985 334.83 357.333 308.171 323.169 307.393C323.152 307.393 323.137 307.393 323.12 307.392C323.872 307.359 324.629 307.336 325.387 307.327C326.171 307.318 326.946 307.324 327.722 307.342C334.34 307.492 340.717 308.607 346.694 310.546C351.278 312.036 355.628 314.012 359.669 316.409C360.397 316.841 361.118 317.287 361.825 317.747C367.076 321.151 371.752 325.289 375.688 330.011C377.092 331.698 378.403 333.46 379.613 335.288C382.069 339.008 384.105 343.006 385.651 347.228C386.271 348.921 386.812 350.653 387.272 352.414C388.259 356.21 388.861 360.155 389.038 364.21C389.093 365.479 389.106 366.762 389.076 368.053C389.064 368.562 389.046 369.065 389.02 369.568C388.82 373.602 388.202 377.519 387.202 381.285C386.743 383.025 386.2 384.73 385.582 386.402C384.055 390.53 382.06 394.439 379.661 398.079C378.53 399.797 377.309 401.453 376.004 403.045C372.364 407.485 368.074 411.417 363.279 414.72C359.509 417.317 355.427 419.524 351.102 421.286C349.287 422.025 347.428 422.688 345.531 423.268L345.542 423.28C345.485 423.298 345.428 423.313 345.369 423.329C345.264 423.357 345.157 423.386 345.052 423.417C344.612 423.548 344.167 423.669 343.725 423.79C343.208 423.931 342.691 424.07 342.169 424.199C341.723 424.311 341.272 424.415 340.819 424.517C340.293 424.636 339.765 424.749 339.233 424.854C338.782 424.944 338.33 425.031 337.877 425.112C337.334 425.207 336.788 425.295 336.241 425.378C336.054 425.407 335.866 425.434 335.679 425.463C335.418 425.5 335.157 425.537 334.893 425.572C334.328 425.647 333.76 425.708 333.191 425.767C332.752 425.812 332.314 425.862 331.874 425.899C331.529 425.927 331.185 425.951 330.838 425.974C330.579 425.989 330.321 426.005 330.062 426.018C329.649 426.042 329.239 426.073 328.824 426.088C328.146 426.115 327.462 426.119 326.781 426.125C326.434 426.129 326.09 426.14 325.741 426.137C325.372 426.136 325.001 426.13 324.63 426.121Z" fill="url(#paint48_radial_44_2485)"/>
                <path id="path436_2" d="M320.239 425.838C319.679 425.825 319.118 425.805 318.556 425.778C318.428 425.772 318.296 425.767 318.167 425.759C318.099 425.755 318.034 425.752 317.966 425.748C293.512 424.362 273.214 409.81 264.163 389.898C260.72 382.323 258.904 373.973 259.106 365.277C259.107 365.248 259.108 365.22 259.108 365.191C259.108 365.184 259.109 365.177 259.109 365.167C259.109 365.146 259.11 365.124 259.11 365.103C259.111 365.096 259.111 365.088 259.111 365.081C259.112 365.057 259.112 365.031 259.113 365.007C259.113 365.002 259.113 365 259.113 364.995C259.356 356.405 261.551 348.237 265.301 340.895C267.163 337.248 269.41 333.805 271.992 330.613C276.067 344.477 281.853 351.288 287.151 354.903C288.378 355.74 289.602 356.423 290.822 356.978L292.57 357.681L294.253 358.346L295.855 358.83L296.615 359.027L297.968 359.237L299.241 359.266C300.636 359.412 302.024 359.383 303.389 359.414C304.358 359.436 305.318 359.441 306.268 359.446C307.218 359.451 308.158 359.455 309.088 359.476C312.157 359.546 315.106 359.797 317.888 360.842L320.573 362.169L321.744 362.912L323.844 364.778C324.114 365.054 324.379 365.344 324.644 365.648C334.691 377.255 326.588 393.466 333.813 411.37C335.31 415.077 337.538 419.055 340.964 422.997C334.42 425 327.443 426.002 320.239 425.838Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_3" d="M320.249 425.728C319.686 425.715 319.125 425.695 318.559 425.668C319.121 425.695 319.682 425.715 320.241 425.728C327.446 425.892 334.423 424.89 340.966 422.887C337.541 418.945 335.312 414.968 333.815 411.26C326.591 393.356 334.693 377.145 324.646 365.538C324.381 365.234 324.116 364.944 323.847 364.668L321.664 362.731L320.743 362.173L317.891 360.732C315.109 359.687 312.16 359.436 309.09 359.367C308.161 359.345 307.221 359.341 306.27 359.336C305.32 359.331 304.36 359.326 303.391 359.304C302.027 359.273 300.645 359.208 299.25 359.061L297.718 359.027L294.422 358.35L290.824 356.868C289.605 356.313 288.381 355.631 287.153 354.793C281.856 351.178 276.069 344.367 271.994 330.503C280.479 320.016 292.586 312.257 306.585 308.962C311.18 307.882 315.977 307.285 320.919 307.228C321.675 307.218 322.435 307.221 323.186 307.239C323.203 307.239 323.217 307.239 323.234 307.24C357.398 308.017 385.051 334.676 384.282 367.798C383.513 400.935 354.618 426.417 320.433 425.732C320.371 425.731 320.311 425.729 320.249 425.728ZM259.111 365.081C259.111 365.074 259.111 365.064 259.111 365.057C259.111 365.067 259.111 365.074 259.111 365.081Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="css" d="M303.904 353.559C307.263 353.635 311.653 355.855 313.671 358.542C313.865 358.827 314.3 359.036 314.62 359.044C315.3 359.059 315.913 358.513 315.928 357.833C315.934 357.593 315.782 357.23 315.667 357.027C314.501 355.56 312.265 353.629 310.605 352.751C308.865 351.871 305.882 351.083 303.963 351.039C295.605 350.849 288.689 357.493 288.496 365.811C288.302 374.169 294.902 381.121 303.26 381.311C305.18 381.355 308.196 380.703 309.975 379.903C311.674 379.102 313.997 377.274 315.23 375.862C315.354 375.665 315.483 375.308 315.488 375.068C315.504 374.388 314.957 373.815 314.277 373.8C313.957 373.792 313.513 373.982 313.306 374.258C311.166 376.85 306.678 378.868 303.319 378.792C296.36 378.633 290.814 372.826 290.974 365.908C291.136 358.949 296.946 353.4 303.904 353.559ZM327.872 354.184C330.991 354.255 333.452 356.832 333.379 359.951C333.364 360.631 333.911 361.203 334.59 361.219C335.27 361.234 335.843 360.687 335.859 360.007C335.963 355.528 332.408 351.807 327.929 351.705C323.451 351.603 319.687 355.158 319.583 359.637C319.479 364.116 323.073 367.878 327.552 367.98C330.671 368.051 333.132 370.628 333.059 373.747C332.987 376.866 330.409 379.328 327.29 379.257C324.171 379.186 321.71 376.61 321.782 373.49C321.798 372.811 321.251 372.238 320.571 372.223C319.851 372.206 319.279 372.753 319.263 373.433C319.159 377.912 322.753 381.635 327.232 381.737C331.711 381.838 335.435 378.282 335.539 373.803C335.643 369.325 332.089 365.563 327.61 365.461C324.491 365.39 322.03 362.813 322.102 359.694C322.175 356.575 324.753 354.113 327.872 354.184ZM347.125 354.622C350.244 354.693 352.705 357.27 352.632 360.389C352.617 361.069 353.163 361.641 353.843 361.657C354.523 361.672 355.096 361.125 355.112 360.445C355.216 355.967 351.661 352.245 347.182 352.143C342.703 352.041 338.94 355.596 338.836 360.075C338.732 364.554 342.326 368.316 346.804 368.418C349.924 368.489 352.384 371.066 352.312 374.185C352.24 377.304 349.662 379.766 346.543 379.695C343.423 379.624 340.963 377.048 341.035 373.929C341.051 373.249 340.504 372.676 339.824 372.661C339.104 372.644 338.531 373.191 338.516 373.871C338.412 378.35 342.006 382.073 346.485 382.175C350.964 382.277 354.687 378.72 354.791 374.242C354.895 369.763 351.342 366.001 346.863 365.899C343.744 365.828 341.283 363.251 341.355 360.132C341.428 357.013 344.005 354.551 347.125 354.622Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="sass"  onMouseOver={() => changeHoverID(1)} >
                <path id="path316_4" d="M197.392 508.401C196.83 508.388 196.268 508.368 195.703 508.337L195.701 508.337C195.059 508.304 194.421 508.258 193.785 508.204C222.711 508.784 247.153 487.558 247.794 459.944C248.434 432.342 225.028 410.118 196.12 409.46C196.106 409.46 196.094 409.459 196.079 409.459C196.715 409.432 197.356 409.413 197.998 409.405C198.661 409.398 199.316 409.403 199.973 409.418C205.572 409.546 210.969 410.477 216.027 412.094C219.907 413.337 223.587 414.985 227.007 416.983C227.623 417.344 228.234 417.716 228.832 418.1C233.277 420.937 237.234 424.387 240.566 428.324C241.754 429.73 242.864 431.198 243.888 432.722C245.968 435.823 247.692 439.156 249.001 442.674C249.526 444.085 249.985 445.529 250.374 446.996C251.211 450.16 251.721 453.448 251.872 456.826C251.919 457.884 251.93 458.953 251.905 460.029C251.896 460.453 251.88 460.873 251.859 461.292C251.691 464.654 251.169 467.918 250.324 471.055C249.935 472.505 249.477 473.926 248.954 475.319C247.663 478.758 245.976 482.016 243.948 485.049C242.991 486.48 241.959 487.859 240.855 489.186C237.776 492.885 234.148 496.16 230.091 498.912C226.902 501.074 223.449 502.912 219.79 504.379C218.254 504.995 216.682 505.546 215.076 506.029L215.086 506.039C215.037 506.054 214.989 506.067 214.939 506.08C214.85 506.104 214.76 506.128 214.671 506.153C214.299 506.262 213.923 506.363 213.549 506.464C213.111 506.582 212.673 506.697 212.232 506.804C211.854 506.897 211.473 506.984 211.09 507.069C210.645 507.168 210.198 507.262 209.748 507.349C209.367 507.424 208.984 507.497 208.601 507.564C208.141 507.643 207.679 507.716 207.216 507.785C207.058 507.809 206.899 507.831 206.741 507.856C206.52 507.887 206.299 507.917 206.076 507.946C205.598 508.009 205.117 508.06 204.635 508.108C204.265 508.146 203.894 508.187 203.521 508.218C203.23 508.242 202.938 508.261 202.644 508.28C202.426 508.293 202.207 508.306 201.988 508.317C201.639 508.337 201.292 508.363 200.941 508.375C200.367 508.397 199.789 508.4 199.212 508.405C198.919 508.408 198.627 508.417 198.332 508.415C198.02 508.414 197.706 508.408 197.392 508.401Z" fill="url(#paint49_radial_44_2485)"/>
                <path id="path436_3" d="M193.676 508.164C193.203 508.153 192.728 508.136 192.253 508.113C192.144 508.109 192.032 508.104 191.923 508.098C191.866 508.095 191.81 508.092 191.753 508.088C171.061 506.927 153.881 494.793 146.217 478.198C143.302 471.884 141.763 464.925 141.931 457.678C141.932 457.655 141.932 457.631 141.933 457.607C141.933 457.601 141.933 457.595 141.933 457.587C141.934 457.569 141.934 457.551 141.935 457.533C141.935 457.527 141.935 457.521 141.935 457.515C141.936 457.495 141.936 457.473 141.937 457.454C141.937 457.45 141.937 457.448 141.937 457.444C142.14 450.285 143.994 443.479 147.165 437.362C148.74 434.323 150.64 431.454 152.824 428.795C156.276 440.35 161.174 446.028 165.658 449.041C166.696 449.74 167.733 450.309 168.765 450.772L170.244 451.358L171.668 451.913L173.024 452.317L173.667 452.481L174.812 452.656L175.889 452.681C177.07 452.803 178.244 452.779 179.399 452.805C180.219 452.824 181.031 452.828 181.835 452.833C182.639 452.837 183.434 452.841 184.221 452.859C186.818 452.918 189.314 453.128 191.668 454L193.94 455.106L194.932 455.726L196.709 457.281C196.937 457.511 197.161 457.753 197.385 458.007C205.89 467.682 199.039 481.189 205.158 496.112C206.425 499.201 208.312 502.516 211.212 505.802C205.676 507.47 199.772 508.303 193.676 508.164Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_4" d="M193.685 508.072C193.208 508.061 192.734 508.045 192.255 508.022C192.73 508.044 193.205 508.061 193.678 508.072C199.774 508.211 205.678 507.378 211.214 505.711C208.314 502.424 206.427 499.11 205.16 496.02C199.041 481.097 205.893 467.59 197.388 457.915C197.164 457.661 196.939 457.419 196.711 457.189L194.863 455.575L194.084 455.109L191.67 453.908C189.316 453.036 186.821 452.826 184.223 452.767C183.437 452.749 182.641 452.745 181.837 452.741C181.033 452.737 180.221 452.732 179.401 452.713C178.247 452.687 177.077 452.633 175.897 452.51L174.601 452.481L171.812 451.916L168.767 450.68C167.735 450.217 166.699 449.648 165.66 448.95C161.177 445.936 156.278 440.258 152.826 428.703C160.002 419.966 170.244 413.504 182.089 410.763C185.976 409.864 190.035 409.367 194.216 409.321C194.857 409.314 195.499 409.317 196.135 409.331C196.149 409.331 196.161 409.332 196.176 409.332C225.083 409.99 248.49 432.214 247.849 459.816C247.208 487.43 222.766 508.656 193.84 508.076C193.788 508.075 193.737 508.073 193.685 508.072ZM141.935 457.515C141.935 457.509 141.935 457.501 141.935 457.495C141.935 457.503 141.935 457.509 141.935 457.515Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="Sass" d="M170.309 447.589C172.649 447.642 174.494 449.575 174.44 451.914C174.428 452.424 174.838 452.854 175.348 452.865C175.858 452.877 176.288 452.466 176.299 451.957C176.377 448.597 173.711 445.806 170.352 445.73C166.993 445.653 164.171 448.32 164.093 451.679C164.015 455.038 166.71 457.86 170.069 457.936C172.408 457.99 174.254 459.922 174.2 462.261C174.145 464.601 172.212 466.447 169.873 466.394C167.533 466.341 165.688 464.408 165.742 462.069C165.754 461.559 165.344 461.13 164.834 461.118C164.294 461.106 163.864 461.516 163.852 462.026C163.774 465.385 166.47 468.177 169.829 468.254C173.189 468.33 175.981 465.663 176.059 462.304C176.137 458.945 173.472 456.123 170.113 456.047C167.773 455.994 165.928 454.061 165.982 451.722C166.036 449.382 167.97 447.536 170.309 447.589ZM188.769 446.659C188.657 446.326 188.273 446.047 187.913 446.039C187.553 446.031 187.157 446.292 187.029 446.619L178.359 467.217C178.327 467.307 178.294 467.456 178.291 467.576C178.279 468.086 178.689 468.515 179.199 468.527C179.559 468.535 179.955 468.274 180.083 467.947L187.832 449.548L190.992 458.172L187.813 458.1C187.273 458.088 186.844 458.498 186.832 459.008C186.82 459.518 187.23 459.947 187.77 459.96L191.699 460.049L194.719 468.28C194.831 468.612 195.215 468.891 195.575 468.899C196.085 468.911 196.514 468.501 196.526 467.991C196.529 467.871 196.502 467.72 196.474 467.63L188.769 446.659ZM205.808 448.397C208.147 448.45 209.993 450.383 209.938 452.722C209.927 453.232 210.337 453.661 210.847 453.673C211.357 453.685 211.786 453.274 211.798 452.764C211.876 449.405 209.21 446.614 205.851 446.537C202.492 446.461 199.669 449.128 199.591 452.487C199.513 455.846 202.208 458.668 205.568 458.744C207.907 458.797 209.753 460.73 209.698 463.069C209.644 465.409 207.711 467.255 205.371 467.202C203.032 467.149 201.186 465.216 201.24 462.877C201.252 462.367 200.842 461.938 200.332 461.926C199.792 461.914 199.363 462.324 199.351 462.834C199.273 466.193 201.969 468.985 205.328 469.061C208.687 469.138 211.48 466.471 211.558 463.112C211.636 459.753 208.971 456.931 205.611 456.855C203.272 456.801 201.426 454.869 201.481 452.53C201.535 450.19 203.468 448.344 205.808 448.397ZM220.247 448.726C222.587 448.779 224.432 450.711 224.378 453.051C224.366 453.561 224.776 453.99 225.286 454.002C225.796 454.013 226.226 453.603 226.238 453.093C226.316 449.734 223.65 446.943 220.291 446.866C216.931 446.79 214.109 449.456 214.031 452.815C213.953 456.174 216.648 458.996 220.007 459.073C222.347 459.126 224.192 461.059 224.138 463.398C224.084 465.737 222.15 467.584 219.811 467.531C217.471 467.477 215.626 465.545 215.68 463.205C215.692 462.696 215.282 462.266 214.772 462.255C214.232 462.242 213.802 462.653 213.791 463.162C213.713 466.522 216.409 469.314 219.768 469.39C223.127 469.466 225.919 466.799 225.997 463.44C226.075 460.081 223.41 457.26 220.051 457.183C217.712 457.13 215.866 455.198 215.92 452.858C215.975 450.519 217.908 448.672 220.247 448.726Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="figma"  onMouseOver={() => changeHoverID(2)} >
                <path id="path316_5" d="M322.136 546.609C321.677 546.598 321.216 546.581 320.754 546.557L320.753 546.557C320.228 546.53 319.705 546.493 319.185 546.449C342.852 546.926 362.84 529.954 363.353 507.863C363.866 485.782 344.706 467.993 321.054 467.454C321.042 467.454 321.032 467.454 321.02 467.454C321.541 467.432 322.065 467.417 322.59 467.411C323.132 467.406 323.669 467.41 324.206 467.423C328.787 467.527 333.204 468.274 337.342 469.57C340.517 470.566 343.529 471.886 346.328 473.486C346.832 473.774 347.332 474.072 347.822 474.38C351.459 476.652 354.698 479.413 357.427 482.564C358.399 483.689 359.308 484.864 360.146 486.084C361.849 488.565 363.261 491.232 364.334 494.048C364.764 495.177 365.14 496.332 365.459 497.506C366.145 500.037 366.564 502.668 366.689 505.371C366.727 506.217 366.737 507.072 366.717 507.933C366.709 508.272 366.697 508.608 366.68 508.944C366.544 511.633 366.118 514.244 365.428 516.753C365.111 517.913 364.736 519.049 364.309 520.164C363.254 522.915 361.876 525.52 360.217 527.946C359.435 529.09 358.591 530.193 357.688 531.254C355.171 534.212 352.204 536.831 348.886 539.03C346.278 540.759 343.453 542.228 340.46 543.4C339.204 543.892 337.917 544.333 336.604 544.718L336.612 544.727C336.572 544.738 336.533 544.749 336.492 544.759C336.419 544.778 336.345 544.797 336.273 544.818C335.968 544.905 335.66 544.985 335.354 545.066C334.996 545.16 334.638 545.252 334.277 545.337C333.968 545.412 333.656 545.481 333.343 545.549C332.979 545.628 332.613 545.702 332.245 545.772C331.933 545.832 331.62 545.89 331.307 545.943C330.93 546.006 330.553 546.065 330.174 546.12C330.045 546.139 329.914 546.157 329.785 546.176C329.604 546.201 329.424 546.225 329.241 546.248C328.85 546.298 328.457 546.339 328.062 546.377C327.759 546.407 327.456 546.44 327.151 546.465C326.912 546.483 326.674 546.499 326.434 546.514C326.255 546.524 326.076 546.534 325.897 546.543C325.611 546.559 325.327 546.579 325.04 546.589C324.571 546.607 324.097 546.609 323.625 546.612C323.385 546.615 323.147 546.622 322.905 546.62C322.65 546.619 322.393 546.615 322.136 546.609Z" fill="url(#paint50_radial_44_2485)"/>
                <path id="path436_4" d="M319.096 546.417C318.709 546.409 318.32 546.395 317.931 546.377C317.842 546.373 317.751 546.369 317.662 546.364C317.615 546.361 317.57 546.359 317.522 546.356C300.593 545.418 286.532 535.704 280.254 522.425C277.866 517.372 276.604 511.804 276.738 506.007C276.739 505.988 276.739 505.969 276.74 505.95C276.74 505.945 276.74 505.94 276.74 505.934C276.74 505.92 276.741 505.905 276.741 505.891C276.741 505.886 276.741 505.881 276.742 505.877C276.742 505.861 276.742 505.843 276.743 505.827C276.743 505.824 276.743 505.823 276.743 505.819C276.906 500.093 278.421 494.649 281.012 489.756C282.3 487.325 283.853 485.031 285.638 482.905C288.468 492.15 292.478 496.694 296.147 499.107C296.997 499.666 297.845 500.122 298.69 500.493L299.9 500.962L301.066 501.407L302.175 501.731L302.701 501.862L303.639 502.003L304.52 502.023C305.486 502.121 306.447 502.103 307.392 502.124C308.062 502.139 308.727 502.143 309.384 502.147C310.043 502.151 310.693 502.155 311.337 502.169C313.462 502.218 315.504 502.387 317.43 503.085L319.29 503.971L320.101 504.467L321.556 505.712C321.743 505.896 321.926 506.09 322.11 506.293C329.072 514.037 323.473 524.839 328.485 536.78C329.523 539.253 331.069 541.905 333.442 544.535C328.914 545.867 324.084 546.531 319.096 546.417Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_5" d="M319.103 546.344C318.713 546.335 318.325 546.322 317.933 546.303C318.322 546.321 318.711 546.335 319.098 546.344C324.085 546.457 328.915 545.793 333.444 544.462C331.07 541.832 329.525 539.179 328.487 536.707C323.474 524.766 329.074 513.963 322.111 506.219C321.928 506.016 321.744 505.823 321.558 505.638L320.045 504.346L319.407 503.973L317.432 503.011C315.505 502.313 313.464 502.144 311.339 502.096C310.695 502.081 310.044 502.077 309.386 502.074C308.728 502.07 308.064 502.066 307.393 502.051C306.449 502.029 305.492 501.985 304.526 501.887L303.466 501.862L301.183 501.409L298.692 500.42C297.847 500.048 296.999 499.593 296.149 499.034C292.479 496.621 288.469 492.076 285.64 482.831C291.507 475.845 299.884 470.679 309.575 468.491C312.755 467.773 316.075 467.378 319.496 467.343C320.02 467.337 320.546 467.339 321.066 467.351C321.078 467.351 321.087 467.352 321.099 467.352C344.751 467.89 363.911 485.679 363.398 507.761C362.886 529.852 342.897 546.823 319.23 546.347C319.188 546.346 319.146 546.345 319.103 546.344ZM276.741 505.876C276.742 505.872 276.742 505.865 276.742 505.86C276.742 505.867 276.742 505.872 276.741 505.876Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="figma_2" d="M297.94 514.295C298.28 514.303 298.567 514.03 298.575 513.69L298.719 507.491L300.738 507.537C301.078 507.545 301.364 507.271 301.372 506.932C301.38 506.592 301.107 506.305 300.767 506.298L298.747 506.252L298.881 500.473L303.54 500.579C303.9 500.587 304.187 500.314 304.195 499.954C304.203 499.614 303.929 499.328 303.569 499.32L298.291 499.199C297.951 499.192 297.664 499.465 297.657 499.805L297.335 513.661C297.327 514.001 297.601 514.288 297.94 514.295ZM305.811 514.535C306.151 514.542 306.438 514.269 306.446 513.929L306.767 500.073L306.768 500.053C306.776 499.713 306.502 499.426 306.162 499.419C305.822 499.411 305.536 499.684 305.528 500.024L305.528 500.044L305.206 513.901C305.198 514.24 305.471 514.527 305.811 514.535ZM316.017 500.843C316.017 500.843 316.017 500.843 316.037 500.844C317.717 500.882 319.892 501.992 320.901 503.335C320.998 503.477 321.215 503.582 321.375 503.586C321.735 503.594 322.021 503.32 322.029 502.981C322.032 502.861 321.976 502.679 321.899 502.577C321.336 501.844 320.198 500.878 319.368 500.439C318.498 499.999 317.006 499.605 316.047 499.584C311.868 499.488 308.41 502.811 308.313 506.969C308.216 511.148 311.516 514.624 315.695 514.719C316.675 514.742 318.163 514.416 319.052 514.016C319.902 513.615 321.083 512.702 321.68 511.995C321.762 511.897 321.827 511.718 321.829 511.598C321.833 511.418 321.719 511.196 321.561 511.092L315.483 506.633C315.404 506.571 315.246 506.507 315.126 506.504C314.786 506.497 314.499 506.77 314.491 507.13C314.487 507.31 314.602 507.533 314.739 507.636L320.267 511.683C319.223 512.699 317.184 513.493 315.724 513.46C312.245 513.381 309.472 510.477 309.553 506.998C309.634 503.519 312.538 500.764 316.017 500.843ZM336.782 500.656C336.77 500.335 336.496 500.069 336.176 500.062C335.976 500.057 335.712 500.211 335.628 500.389L331.145 508.229L327.05 500.194C326.955 500.012 326.698 499.846 326.499 499.841C326.179 499.834 325.893 500.088 325.865 500.407L324.382 514.337C324.382 514.337 324.381 514.357 324.381 514.377C324.373 514.717 324.646 515.003 324.986 515.011C325.306 515.018 325.592 514.785 325.619 514.465L326.894 502.631L330.568 509.837C330.643 510.018 330.9 510.164 331.1 510.169C331.3 510.173 331.563 510.039 331.667 509.862L335.672 502.831L336.376 514.71C336.389 515.03 336.663 515.297 336.983 515.304C337.003 515.304 337.023 515.305 337.043 515.305C337.363 515.273 337.63 514.999 337.637 514.679L337.638 514.639L336.782 500.656ZM345.951 500.664C345.876 500.442 345.62 500.257 345.38 500.251C345.14 500.246 344.876 500.42 344.791 500.638L339.011 514.37C338.989 514.429 338.967 514.529 338.965 514.609C338.957 514.949 339.231 515.235 339.571 515.243C339.811 515.248 340.075 515.074 340.16 514.856L345.326 502.59L347.433 508.34L345.314 508.292C344.954 508.283 344.667 508.557 344.659 508.897C344.651 509.237 344.925 509.523 345.285 509.531L347.904 509.591L349.917 515.078C349.992 515.3 350.248 515.486 350.488 515.491C350.828 515.499 351.114 515.225 351.122 514.885C351.124 514.806 351.106 514.705 351.088 514.645L345.951 500.664Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="sass_2"  onMouseOver={() => changeHoverID(0)} >
                <path id="path316_6" d="M58.003 480.469C57.4419 480.456 56.8791 480.435 56.3145 480.405L56.3126 480.405C55.6707 480.372 55.032 480.326 54.3966 480.271C83.3225 480.852 107.764 459.625 108.405 432.011C109.046 404.41 85.6396 382.186 56.7317 381.528C56.7172 381.527 56.7051 381.527 56.6907 381.527C57.3269 381.499 57.9673 381.48 58.609 381.473C59.2721 381.466 59.9273 381.471 60.5842 381.486C66.1838 381.613 71.5808 382.544 76.6381 384.162C80.518 385.405 84.1988 387.053 87.6186 389.051C88.2348 389.411 88.8451 389.784 89.4436 390.167C93.8881 393.005 97.8452 396.455 101.178 400.391C102.366 401.798 103.476 403.266 104.5 404.79C106.579 407.89 108.303 411.223 109.613 414.742C110.137 416.153 110.596 417.596 110.986 419.064C111.822 422.228 112.332 425.515 112.484 428.894C112.53 429.952 112.542 431.021 112.517 432.097C112.507 432.521 112.492 432.94 112.47 433.36C112.302 436.721 111.78 439.985 110.935 443.123C110.547 444.573 110.089 445.993 109.566 447.387C108.275 450.826 106.588 454.084 104.559 457.116C103.603 458.547 102.57 459.927 101.467 461.253C98.3878 464.953 94.7594 468.228 90.7024 470.979C87.5137 473.142 84.0605 474.98 80.4012 476.447C78.8656 477.063 77.2931 477.614 75.6878 478.097L75.6971 478.107C75.6489 478.122 75.6007 478.135 75.5505 478.148C75.4619 478.171 75.3712 478.195 75.2825 478.221C74.9102 478.33 74.5342 478.431 74.1601 478.532C73.7225 478.649 73.2848 478.765 72.8436 478.872C72.4659 478.965 72.0845 479.052 71.7012 479.137C71.2563 479.236 70.8096 479.329 70.3592 479.417C69.9781 479.492 69.5951 479.564 69.2123 479.631C68.7525 479.71 68.2909 479.784 67.8276 479.853C67.6699 479.877 67.5103 479.899 67.3526 479.923C67.1316 479.954 66.9105 479.985 66.6876 480.014C66.209 480.076 65.7288 480.127 65.2468 480.176C64.8761 480.213 64.5053 480.255 64.1329 480.286C63.8411 480.309 63.5494 480.328 63.2558 480.348C63.0371 480.361 62.8184 480.373 62.5997 480.384C62.2505 480.404 61.9031 480.43 61.5522 480.442C60.9787 480.465 60.4 480.468 59.8232 480.472C59.53 480.476 59.2385 480.485 58.9435 480.482C58.6312 480.481 58.3171 480.476 58.003 480.469Z" fill="url(#paint51_radial_44_2485)"/>
                <path id="path436_5" d="M54.2874 480.231C53.8142 480.221 53.3395 480.204 52.864 480.181C52.7551 480.177 52.6437 480.172 52.5348 480.166C52.477 480.162 52.4219 480.159 52.3643 480.156C31.6727 478.994 14.4929 466.861 6.82875 450.265C3.91324 443.952 2.37428 436.993 2.54249 429.746C2.54304 429.722 2.54359 429.698 2.54415 429.674C2.54429 429.668 2.54442 429.662 2.54461 429.655C2.54503 429.637 2.54563 429.619 2.54604 429.601C2.54618 429.595 2.54632 429.589 2.54646 429.583C2.54711 429.563 2.54762 429.541 2.54827 429.521C2.54837 429.517 2.54841 429.515 2.5485 429.511C2.75107 422.353 4.60591 415.547 7.77663 409.429C9.35166 406.39 11.2515 403.522 13.4351 400.863C16.8873 412.417 21.7858 418.095 26.2693 421.109C27.3079 421.807 28.3441 422.376 29.3761 422.84L30.8553 423.426L32.2795 423.98L33.6353 424.384L34.2782 424.548L35.4237 424.724L36.5009 424.748C37.6815 424.871 38.8558 424.846 40.0104 424.873C40.83 424.891 41.6423 424.896 42.4462 424.9C43.2507 424.905 44.0459 424.909 44.8326 424.927C47.4298 424.986 49.925 425.196 52.2792 426.067L54.5514 427.174L55.543 427.794L57.3204 429.349C57.5484 429.579 57.7728 429.821 57.9968 430.075C66.5018 439.75 59.6507 453.257 65.7691 468.179C67.0367 471.269 68.9237 474.584 71.8231 477.87C66.2872 479.537 60.3836 480.37 54.2874 480.231Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_6" d="M54.2965 480.14C53.8199 480.129 53.3453 480.112 52.8662 480.089C53.3417 480.112 53.8164 480.129 54.2896 480.14C60.3858 480.278 66.2894 479.445 71.8253 477.778C68.9259 474.492 67.0389 471.177 65.7713 468.087C59.6529 453.165 66.504 439.658 57.999 429.983C57.775 429.729 57.5507 429.487 57.3226 429.257L55.4747 427.643L54.6951 427.177L52.2814 425.976C49.9272 425.104 47.432 424.894 44.8348 424.835C44.0481 424.817 43.2529 424.813 42.4484 424.809C41.6445 424.804 40.8322 424.8 40.0126 424.781C38.858 424.755 37.6887 424.7 36.5082 424.578L35.2123 424.548L32.4232 423.983L29.3783 422.748C28.3463 422.284 27.3101 421.716 26.2715 421.017C21.788 418.003 16.8895 412.325 13.4373 400.771C20.6132 392.034 30.8553 385.572 42.7003 382.83C46.5879 381.932 50.646 381.435 54.8277 381.389C55.468 381.382 56.1108 381.384 56.746 381.399C56.7604 381.399 56.7725 381.399 56.787 381.4C85.6949 382.057 109.101 404.282 108.46 431.883C107.819 459.497 83.3778 480.724 54.4519 480.143C54.3996 480.142 54.3488 480.141 54.2965 480.14ZM2.54635 429.583C2.54648 429.577 2.54667 429.569 2.54681 429.563C2.54662 429.571 2.54648 429.577 2.54635 429.583Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="B-Strap" d="M20.4867 438.105L23.066 438.164C25.6853 438.223 27.8744 436.133 27.9357 433.493C27.9738 431.854 26.8386 429.908 25.3957 429.155C25.6607 428.941 26.0309 428.509 26.2178 428.213C26.4675 427.799 26.685 427.043 26.6962 426.563C26.7393 424.704 25.275 423.15 23.4155 423.108L20.8362 423.049C20.4962 423.041 20.2098 423.315 20.2019 423.655L19.8812 437.471C19.8733 437.811 20.1468 438.097 20.4867 438.105ZM23.2879 428.606C22.9279 428.598 22.6415 428.872 22.6336 429.212C22.6257 429.552 22.8992 429.838 23.2591 429.846C25.1986 429.89 26.741 431.526 26.696 433.465C26.651 435.405 25.0343 436.968 23.0948 436.924L21.1353 436.88L21.4272 424.303L23.3867 424.348C24.5459 424.394 25.4634 425.375 25.4365 426.535C25.4096 427.694 24.448 428.613 23.2879 428.606ZM39.7781 430.382L30.4605 430.17C30.4405 430.17 30.4405 430.17 30.4405 430.17C30.1006 430.162 29.8142 430.435 29.8058 430.795C29.798 431.135 30.0714 431.421 30.4113 431.429C30.4113 431.429 30.4113 431.429 30.4313 431.43L39.7489 431.642C40.0893 431.629 40.3757 431.356 40.3831 431.036C40.391 430.696 40.1176 430.41 39.7781 430.382ZM46.2516 424.888C47.8112 424.923 49.0416 426.212 49.0054 427.771C48.9975 428.111 49.2709 428.398 49.6109 428.405C49.9508 428.413 50.2372 428.139 50.2451 427.8C50.2971 425.56 48.5198 423.699 46.2803 423.648C44.0409 423.597 42.1592 425.375 42.1072 427.614C42.0552 429.854 43.852 431.735 46.0915 431.786C47.6511 431.822 48.8815 433.11 48.8453 434.669C48.8091 436.229 47.5202 437.46 45.9606 437.425C44.401 437.389 43.1705 436.101 43.2067 434.541C43.2146 434.201 42.9412 433.915 42.6013 433.907C42.2414 433.899 41.955 434.173 41.9471 434.512C41.8951 436.752 43.6924 438.613 45.9318 438.664C48.1712 438.715 50.033 436.937 50.085 434.698C50.1369 432.458 48.3601 430.577 46.1207 430.526C44.5611 430.491 43.3307 429.203 43.3669 427.643C43.4031 426.083 44.692 424.852 46.2516 424.888ZM62.0252 424.007L52.4477 423.789C52.1077 423.781 51.8213 424.054 51.813 424.414C51.8051 424.754 52.0785 425.041 52.4184 425.048L56.5773 425.143L56.2729 438.259C56.2645 438.619 56.538 438.906 56.8979 438.914C57.2378 438.922 57.5242 438.648 57.5326 438.288L57.837 425.172L61.9959 425.266C62.3359 425.274 62.6223 425 62.6302 424.66C62.6385 424.301 62.3651 424.014 62.0252 424.007ZM72.0628 430.637C72.0971 429.157 71.2847 427.098 70.2691 426.035C69.2535 424.971 67.2535 424.086 65.7739 424.052L65.7539 424.051C65.414 424.044 65.1276 424.317 65.1197 424.657L64.798 438.513C64.7901 438.853 65.0636 439.14 65.4035 439.147C65.7434 439.155 66.0298 438.882 66.0377 438.542L66.0665 437.302L70.0432 439.213C70.1027 439.234 70.2222 439.257 70.3022 439.259C70.6421 439.267 70.9286 438.993 70.9364 438.653C70.9415 438.433 70.7876 438.17 70.59 438.065L67.5823 436.636C68.3682 436.394 69.4637 435.739 70.057 435.172C71.1208 434.156 72.028 432.136 72.0623 430.657C72.0623 430.657 72.0623 430.657 72.0628 430.637ZM66.344 425.345C68.9359 425.724 70.8639 427.989 70.8031 430.608C70.7418 433.247 68.7108 435.422 66.1041 435.682L66.344 425.345ZM81.0719 424.78C80.997 424.558 80.7413 424.372 80.5013 424.367C80.2614 424.362 79.9973 424.536 79.9122 424.754L74.132 438.486C74.1106 438.545 74.0883 438.645 74.0864 438.725C74.0785 439.065 74.3519 439.351 74.6919 439.359C74.9318 439.364 75.1959 439.19 75.281 438.972L80.447 426.706L82.5542 432.456L80.4347 432.408C80.0748 432.399 79.7884 432.673 79.7805 433.013C79.7726 433.353 80.046 433.639 80.4059 433.647L83.0253 433.707L85.0385 439.194C85.1133 439.416 85.3691 439.602 85.609 439.607C85.9489 439.615 86.2354 439.341 86.2433 439.001C86.2451 438.921 86.2274 438.821 86.2088 438.761L81.0719 424.78ZM89.3797 424.669C89.0398 424.661 88.7533 424.935 88.7454 425.275L88.4275 438.971C88.4192 439.331 88.6931 439.597 89.033 439.605C89.3729 439.613 89.6588 439.359 89.6672 438.999L89.7043 437.4C90.2851 437.373 91.1704 437.153 91.7159 436.925C92.3018 436.679 93.1755 436.098 93.6256 435.669C94.6894 434.652 95.5761 432.652 95.61 431.193C95.6438 429.733 94.8509 427.694 93.8349 426.651C92.8393 425.588 90.8393 424.702 89.3997 424.67C89.3797 424.669 89.3797 424.669 89.3797 424.669ZM89.9698 425.963C92.5217 426.341 94.4306 428.565 94.3703 431.164C94.3099 433.764 92.2994 435.918 89.7331 436.16L89.9698 425.963Z" fill="white" fillOpacity="0.5"/>
                </g>
                </g>
                <g id="Group 25">
                <g id="laravel"  onMouseOver={() => changeHoverID(13)} >
                <path id="path316_7" d="M1096.6 223.084C1095.94 222.985 1095.29 222.876 1094.63 222.755L1094.63 222.754C1093.88 222.619 1093.14 222.468 1092.4 222.309C1126.22 227.337 1158.18 205.742 1163.24 172.978C1168.3 140.228 1144.34 110.272 1110.56 105.155C1110.54 105.152 1110.53 105.15 1110.51 105.147C1111.26 105.21 1112.01 105.283 1112.77 105.371C1113.54 105.462 1114.31 105.566 1115.08 105.683C1121.62 106.674 1127.8 108.591 1133.48 111.274C1137.83 113.335 1141.89 115.848 1145.58 118.739C1146.25 119.26 1146.91 119.794 1147.55 120.341C1152.31 124.384 1156.41 129.082 1159.71 134.267C1160.88 136.118 1161.95 138.032 1162.91 139.999C1164.87 144 1166.37 148.225 1167.35 152.608C1167.75 154.366 1168.06 156.153 1168.29 157.958C1168.77 161.848 1168.86 165.836 1168.51 169.88C1168.4 171.146 1168.24 172.42 1168.05 173.696C1167.97 174.199 1167.88 174.696 1167.79 175.192C1167.07 179.167 1165.95 182.973 1164.47 186.58C1163.79 188.247 1163.03 189.869 1162.2 191.448C1160.15 195.348 1157.66 198.971 1154.81 202.276C1153.47 203.835 1152.04 205.322 1150.54 206.735C1146.36 210.676 1141.59 214.029 1136.41 216.695C1132.33 218.79 1128 220.46 1123.48 221.657C1121.58 222.159 1119.65 222.58 1117.7 222.914L1117.71 222.927C1117.65 222.937 1117.59 222.945 1117.53 222.953C1117.42 222.968 1117.31 222.983 1117.2 223C1116.75 223.074 1116.29 223.138 1115.84 223.202C1115.31 223.276 1114.78 223.348 1114.24 223.409C1113.78 223.463 1113.32 223.51 1112.86 223.553C1112.32 223.605 1111.79 223.649 1111.25 223.685C1110.79 223.717 1110.33 223.746 1109.87 223.768C1109.32 223.794 1108.76 223.811 1108.21 223.824C1108.02 223.829 1107.83 223.832 1107.64 223.837C1107.38 223.841 1107.11 223.844 1106.85 223.845C1106.28 223.848 1105.71 223.836 1105.13 223.822C1104.69 223.811 1104.25 223.804 1103.81 223.786C1103.47 223.77 1103.12 223.749 1102.77 223.728C1102.52 223.71 1102.26 223.693 1102 223.673C1101.59 223.644 1101.18 223.623 1100.76 223.585C1100.09 223.526 1099.41 223.442 1098.73 223.362C1098.39 223.322 1098.04 223.289 1097.7 223.241C1097.33 223.193 1096.97 223.14 1096.6 223.084Z" fill="url(#paint52_radial_44_2485)"/>
                <path id="path436_6" d="M1092.28 222.244C1091.73 222.16 1091.17 222.069 1090.62 221.971C1090.49 221.949 1090.36 221.927 1090.24 221.903C1090.17 221.89 1090.11 221.878 1090.04 221.866C1065.97 217.381 1047.73 200.367 1041.33 179.469C1038.9 171.518 1038.18 163.006 1039.51 154.408C1039.52 154.38 1039.52 154.351 1039.53 154.323C1039.53 154.316 1039.53 154.309 1039.53 154.3C1039.53 154.278 1039.54 154.257 1039.54 154.236C1039.54 154.229 1039.54 154.222 1039.54 154.215C1039.55 154.191 1039.55 154.165 1039.56 154.141C1039.56 154.137 1039.56 154.134 1039.56 154.13C1040.91 145.642 1044.15 137.821 1048.82 131.016C1051.14 127.636 1053.82 124.508 1056.79 121.671C1059.03 135.938 1063.89 143.429 1068.67 147.688C1069.78 148.675 1070.91 149.507 1072.04 150.213L1073.69 151.132L1075.27 152.006L1076.79 152.69L1077.52 152.981L1078.84 153.362L1080.1 153.553C1081.46 153.875 1082.84 154.023 1084.19 154.227C1085.15 154.372 1086.1 154.499 1087.04 154.625C1087.98 154.751 1088.91 154.875 1089.83 155.014C1092.87 155.474 1095.76 156.098 1098.38 157.488L1100.87 159.146L1101.94 160.032L1103.78 162.149C1104.01 162.457 1104.24 162.778 1104.46 163.114C1112.92 175.903 1102.78 190.948 1107.62 209.624C1108.62 213.491 1110.32 217.718 1113.2 222.063C1106.45 223.217 1099.4 223.323 1092.28 222.244Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_7" d="M1092.31 222.137C1091.75 222.052 1091.19 221.961 1090.64 221.862C1091.19 221.961 1091.74 222.052 1092.3 222.135C1099.42 223.215 1106.47 223.109 1113.22 221.955C1110.33 217.61 1108.64 213.382 1107.64 209.515C1102.8 190.84 1112.93 175.794 1104.48 163.005C1104.25 162.67 1104.03 162.348 1103.8 162.04L1101.88 159.842L1101.04 159.171L1098.4 157.38C1095.78 155.99 1092.89 155.366 1089.85 154.906C1088.93 154.767 1088 154.642 1087.06 154.517C1086.12 154.391 1085.16 154.264 1084.21 154.118C1082.86 153.914 1081.5 153.674 1080.13 153.351L1078.62 153.122L1075.44 152.031L1072.06 150.104C1070.92 149.398 1069.8 148.566 1068.69 147.579C1063.9 143.321 1059.05 135.829 1056.81 121.562C1066.58 112.241 1079.6 106.087 1093.91 104.601C1098.6 104.114 1103.44 104.132 1108.35 104.704C1109.1 104.791 1109.85 104.891 1110.59 105.003C1110.61 105.006 1110.62 105.008 1110.64 105.01C1144.42 110.128 1168.38 140.084 1163.32 172.834C1158.26 205.598 1126.3 227.192 1092.49 222.164C1092.43 222.155 1092.37 222.146 1092.31 222.137ZM1039.54 154.214C1039.54 154.207 1039.55 154.198 1039.55 154.191C1039.55 154.2 1039.54 154.207 1039.54 154.214Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="Laravel" d="M1066.12 165.622L1056.33 164.169L1059.36 144.542C1059.44 144.038 1059.09 143.56 1058.58 143.483C1058.08 143.407 1057.6 143.759 1057.52 144.263L1054.35 164.809C1054.31 165.017 1054.39 165.331 1054.51 165.502C1054.64 165.673 1054.92 165.836 1055.12 165.868L1065.84 167.46C1066.34 167.537 1066.82 167.185 1066.9 166.681C1066.98 166.177 1066.62 165.699 1066.12 165.622ZM1075.46 169.01C1076.35 169.144 1077.8 169.03 1078.67 168.706C1078.96 168.598 1079.22 168.274 1079.26 167.978C1079.34 167.474 1078.99 166.996 1078.49 166.919C1078.37 166.901 1078.18 166.934 1078.05 166.975C1077.41 167.181 1076.4 167.27 1075.75 167.171C1073.14 166.776 1071.36 164.352 1071.76 161.743C1072.16 159.164 1074.59 157.348 1077.2 157.743C1079.78 158.134 1081.59 160.563 1081.19 163.172L1080.32 168.805C1080.24 169.309 1080.59 169.787 1081.1 169.863C1081.6 169.94 1082.08 169.588 1082.16 169.084L1083.03 163.451C1083.59 159.833 1081.11 156.453 1077.49 155.905C1075.97 155.676 1073.77 156.221 1072.53 157.127C1071.33 158.037 1070.15 159.982 1069.92 161.464C1069.36 165.081 1071.84 168.461 1075.46 169.01ZM1092.64 158.231C1088.96 157.673 1085.5 160.214 1084.93 163.89L1084.08 169.435C1083.99 169.968 1084.34 170.446 1084.85 170.523C1085.38 170.603 1085.86 170.251 1085.94 169.718L1086.8 164.173C1087.21 161.505 1089.68 159.694 1092.35 160.098C1092.85 160.175 1093.33 159.823 1093.41 159.289C1093.49 158.785 1093.14 158.307 1092.64 158.231ZM1100.29 172.77C1101.18 172.905 1102.62 172.79 1103.49 172.467C1103.78 172.359 1104.04 172.035 1104.09 171.738C1104.17 171.234 1103.82 170.756 1103.31 170.68C1103.19 170.662 1103.01 170.694 1102.88 170.736C1102.24 170.942 1101.22 171.031 1100.57 170.932C1097.96 170.537 1096.18 168.113 1096.58 165.504C1096.98 162.924 1099.42 161.109 1102.03 161.504C1104.61 161.895 1106.42 164.324 1106.02 166.933L1105.15 172.566C1105.07 173.07 1105.42 173.548 1105.92 173.624C1106.43 173.701 1106.91 173.348 1106.98 172.844L1107.85 167.211C1108.41 163.594 1105.93 160.214 1102.31 159.666C1100.8 159.437 1098.59 159.982 1097.36 160.888C1096.15 161.798 1094.97 163.743 1094.74 165.225C1094.19 168.842 1096.67 172.222 1100.29 172.77ZM1123.41 162.983C1123.33 162.911 1123.16 162.854 1123.04 162.836C1122.71 162.787 1122.32 162.94 1122.13 163.214L1115.88 172.037L1112.58 161.767C1112.48 161.448 1112.15 161.187 1111.83 161.137C1111.32 161.061 1110.85 161.384 1110.77 161.888C1110.75 162.006 1110.78 162.223 1110.82 162.321L1114.67 174.372C1114.77 174.662 1115.09 174.953 1115.42 175.002C1115.72 175.047 1116.14 174.868 1116.3 174.62L1123.64 164.262C1123.71 164.182 1123.77 163.979 1123.79 163.86C1123.84 163.564 1123.68 163.177 1123.41 162.983ZM1134.24 174.91C1133.44 175.365 1132.03 175.637 1131.11 175.498C1128.53 175.107 1126.75 172.683 1127.15 170.104C1127.55 167.524 1129.98 165.738 1132.56 166.129C1133.15 166.219 1134.04 166.566 1134.53 166.914L1128.69 170.944C1128.45 171.09 1128.29 171.369 1128.25 171.606C1128.17 172.11 1128.5 172.583 1129.03 172.664C1129.24 172.696 1129.55 172.622 1129.73 172.467L1136.56 167.766C1136.76 167.645 1136.92 167.367 1136.95 167.159C1136.99 166.922 1136.89 166.573 1136.74 166.398C1135.86 165.415 1134.12 164.484 1132.84 164.291C1129.25 163.747 1125.86 166.238 1125.31 169.825C1124.75 173.442 1127.24 176.793 1130.83 177.336C1132.1 177.529 1134.04 177.156 1135.17 176.508C1135.4 176.391 1135.63 176.092 1135.67 175.825C1135.75 175.321 1135.4 174.843 1134.9 174.767C1134.69 174.735 1134.41 174.784 1134.24 174.91ZM1144.08 177.342C1141.44 176.942 1139.61 174.479 1140.01 171.84L1142.27 157.224C1142.35 156.72 1142 156.242 1141.49 156.165C1140.99 156.089 1140.51 156.441 1140.43 156.945L1138.17 171.562C1137.61 175.208 1140.12 178.623 1143.8 179.18C1144.3 179.256 1144.78 178.934 1144.86 178.4C1144.94 177.896 1144.58 177.418 1144.08 177.342Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="symfony"  onMouseOver={() => changeHoverID(14)} >
                <path id="path316_8" d="M1090.05 381.36C1089.5 381.276 1088.94 381.184 1088.39 381.081L1088.38 381.081C1087.75 380.967 1087.12 380.84 1086.5 380.705C1115.11 384.961 1142.11 367.02 1146.32 339.716C1150.54 312.425 1130.21 287.407 1101.63 283.077C1101.62 283.075 1101.6 283.073 1101.59 283.071C1102.22 283.125 1102.86 283.187 1103.5 283.262C1104.16 283.339 1104.81 283.428 1105.46 283.526C1110.99 284.365 1116.22 285.974 1121.03 288.222C1124.72 289.948 1128.15 292.051 1131.29 294.468C1131.85 294.903 1132.41 295.35 1132.95 295.807C1136.99 299.186 1140.47 303.111 1143.26 307.439C1144.26 308.985 1145.17 310.582 1145.98 312.224C1147.64 315.563 1148.92 319.088 1149.76 322.744C1150.1 324.21 1150.37 325.7 1150.56 327.205C1150.98 330.449 1151.06 333.774 1150.77 337.144C1150.68 338.199 1150.56 339.26 1150.39 340.324C1150.33 340.743 1150.26 341.158 1150.18 341.571C1149.58 344.883 1148.64 348.054 1147.39 351.058C1146.82 352.446 1146.18 353.797 1145.48 355.112C1143.75 358.359 1141.66 361.374 1139.25 364.124C1138.12 365.421 1136.92 366.658 1135.65 367.833C1132.12 371.11 1128.09 373.896 1123.71 376.109C1120.27 377.848 1116.61 379.231 1112.79 380.221C1111.18 380.636 1109.55 380.983 1107.9 381.258L1107.91 381.269C1107.86 381.277 1107.81 381.284 1107.76 381.29C1107.66 381.303 1107.57 381.315 1107.48 381.329C1107.1 381.39 1106.71 381.442 1106.33 381.495C1105.88 381.555 1105.43 381.614 1104.98 381.664C1104.59 381.709 1104.2 381.746 1103.81 381.782C1103.36 381.823 1102.9 381.859 1102.44 381.888C1102.06 381.914 1101.67 381.938 1101.28 381.955C1100.81 381.975 1100.34 381.989 1099.88 381.999C1099.72 382.003 1099.55 382.004 1099.4 382.008C1099.17 382.011 1098.95 382.013 1098.72 382.013C1098.24 382.015 1097.76 382.004 1097.27 381.991C1096.9 381.981 1096.53 381.975 1096.16 381.958C1095.86 381.944 1095.57 381.926 1095.28 381.908C1095.06 381.893 1094.84 381.878 1094.62 381.861C1094.27 381.836 1093.93 381.818 1093.58 381.785C1093 381.735 1092.43 381.664 1091.86 381.595C1091.57 381.561 1091.28 381.533 1090.98 381.493C1090.67 381.452 1090.36 381.407 1090.05 381.36Z" fill="url(#paint53_radial_44_2485)"/>
                <path id="path436_7" d="M1086.4 380.652C1085.93 380.581 1085.46 380.504 1084.99 380.421C1084.89 380.402 1084.78 380.384 1084.67 380.363C1084.61 380.353 1084.56 380.343 1084.5 380.332C1064.13 376.548 1048.67 362.329 1043.22 344.896C1041.15 338.264 1040.53 331.167 1041.63 324.002C1041.64 323.978 1041.64 323.954 1041.64 323.931C1041.65 323.925 1041.65 323.919 1041.65 323.911C1041.65 323.893 1041.65 323.876 1041.66 323.858C1041.66 323.852 1041.66 323.846 1041.66 323.84C1041.66 323.821 1041.67 323.799 1041.67 323.779C1041.67 323.775 1041.67 323.773 1041.67 323.77C1042.8 316.696 1045.52 310.183 1049.46 304.519C1051.42 301.706 1053.67 299.103 1056.18 296.744C1058.11 308.641 1062.23 314.896 1066.28 318.455C1067.22 319.279 1068.18 319.975 1069.14 320.566L1070.53 321.335L1071.87 322.067L1073.16 322.64L1073.78 322.884L1074.89 323.204L1075.96 323.365C1077.11 323.637 1078.28 323.763 1079.42 323.935C1080.23 324.058 1081.04 324.166 1081.84 324.273C1082.63 324.379 1083.42 324.485 1084.2 324.603C1086.77 324.992 1089.21 325.517 1091.44 326.681L1093.55 328.068L1094.45 328.808L1096.01 330.576C1096.21 330.834 1096.4 331.102 1096.59 331.382C1103.76 342.059 1095.22 354.583 1099.35 370.16C1100.2 373.385 1101.65 376.913 1104.1 380.541C1098.39 381.49 1092.43 381.565 1086.4 380.652Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_8" d="M1086.42 380.562C1085.95 380.491 1085.48 380.414 1085.01 380.33C1085.48 380.413 1085.94 380.49 1086.41 380.561C1092.44 381.474 1098.4 381.399 1104.11 380.45C1101.66 376.822 1100.22 373.295 1099.36 370.069C1095.23 354.492 1103.78 341.969 1096.6 331.292C1096.41 331.012 1096.22 330.743 1096.02 330.486L1094.4 328.65L1093.69 328.089L1091.45 326.591C1089.23 325.427 1086.78 324.901 1084.21 324.512C1083.43 324.394 1082.65 324.289 1081.85 324.182C1081.05 324.076 1080.25 323.968 1079.44 323.845C1078.3 323.672 1077.14 323.469 1075.99 323.198L1074.71 323.003L1072.01 322.088L1069.15 320.476C1068.19 319.885 1067.24 319.189 1066.3 318.364C1062.24 314.805 1058.12 308.551 1056.2 296.653C1064.45 288.901 1075.44 283.796 1087.55 282.584C1091.52 282.187 1095.61 282.211 1099.76 282.697C1100.4 282.771 1101.03 282.856 1101.66 282.951C1101.68 282.953 1101.69 282.955 1101.7 282.957C1130.28 287.287 1150.61 312.305 1146.4 339.597C1142.18 366.9 1115.18 384.841 1086.57 380.585C1086.52 380.578 1086.47 380.57 1086.42 380.562ZM1041.66 323.84C1041.66 323.834 1041.66 323.826 1041.66 323.821C1041.66 323.828 1041.66 323.834 1041.66 323.84Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="Symfony" d="M1055.74 316.747C1057.66 317.039 1058.98 318.832 1058.68 320.759C1058.62 321.179 1058.91 321.577 1059.33 321.641C1059.75 321.705 1060.15 321.411 1060.22 320.991C1060.64 318.224 1058.74 315.635 1055.97 315.216C1053.2 314.796 1050.58 316.7 1050.16 319.467C1049.73 322.234 1051.65 324.852 1054.42 325.271C1056.35 325.563 1057.66 327.356 1057.37 329.283C1057.07 331.21 1055.27 332.531 1053.34 332.238C1051.41 331.946 1050.1 330.154 1050.4 328.227C1050.46 327.807 1050.17 327.408 1049.75 327.345C1049.3 327.277 1048.9 327.571 1048.84 327.991C1048.41 330.758 1050.34 333.351 1053.11 333.77C1055.87 334.19 1058.47 332.282 1058.9 329.515C1059.33 326.748 1057.43 324.134 1054.66 323.715C1052.73 323.423 1051.41 321.63 1051.71 319.703C1052.01 317.776 1053.81 316.455 1055.74 316.747ZM1072.53 325.816C1072.45 325.727 1072.26 325.647 1072.13 325.629C1071.91 325.595 1071.59 325.698 1071.44 325.877L1064.66 333.524L1063.15 324.799C1063.1 324.513 1062.81 324.242 1062.51 324.197C1062.09 324.133 1061.69 324.426 1061.63 324.846C1061.62 324.921 1061.63 325.023 1061.62 325.073L1063.35 334.994L1060.07 338.694C1059.98 338.782 1059.9 338.972 1059.88 339.096C1059.81 339.54 1060.11 339.939 1060.53 340.002C1060.77 340.04 1061.07 339.908 1061.26 339.708L1072.62 326.916C1072.68 326.824 1072.76 326.634 1072.78 326.511C1072.82 326.288 1072.71 325.969 1072.53 325.816ZM1088.01 327.984C1087.25 327.868 1086.03 328.037 1085.3 328.356C1084.76 328.603 1083.98 329.169 1083.59 329.614C1083.34 329.071 1082.78 328.303 1082.33 327.907C1081.73 327.386 1080.62 326.864 1079.86 326.748C1077.19 326.344 1074.68 328.188 1074.26 330.857L1073.45 336.119C1073.38 336.539 1073.68 336.937 1074.1 337.001C1074.52 337.065 1074.92 336.771 1074.98 336.351L1075.8 331.089C1076.08 329.26 1077.79 328.003 1079.62 328.28C1081.45 328.557 1082.7 330.264 1082.42 332.092L1081.61 337.355C1081.57 337.779 1081.83 338.173 1082.25 338.237C1082.67 338.3 1083.05 338.003 1083.14 337.587L1083.95 332.324C1084.24 330.496 1085.95 329.238 1087.78 329.515C1089.61 329.793 1090.88 331.503 1090.6 333.332L1089.79 338.594C1089.72 339.014 1090.02 339.413 1090.41 339.472C1090.83 339.536 1091.23 339.243 1091.3 338.823L1092.11 333.56C1092.52 330.892 1090.68 328.388 1088.01 327.984ZM1094.25 340.054L1094.28 340.058C1094.7 340.121 1095.1 339.828 1095.18 339.412L1096.36 331.827L1100.34 332.43C1100.33 332.454 1100.36 332.458 1100.36 332.458C1100.75 332.518 1101.15 332.225 1101.24 331.808C1101.24 331.808 1101.24 331.808 1101.25 331.784C1101.31 331.364 1101.02 330.965 1100.6 330.902L1096.59 330.295L1097.09 327.083L1097.07 327.079C1097.37 325.078 1099.28 323.546 1101.29 323.648C1101.69 323.683 1102.06 323.386 1102.12 322.991C1102.19 322.571 1101.9 322.173 1101.45 322.105L1101.4 322.098C1100.27 322.028 1098.63 322.537 1097.74 323.212C1097.23 323.564 1096.58 324.301 1096.27 324.835C1095.94 325.366 1095.62 326.279 1095.52 326.897L1093.63 339.151C1093.63 339.176 1093.63 339.176 1093.63 339.176C1093.57 339.571 1093.83 339.966 1094.25 340.054ZM1111.65 333.183C1110.92 332.163 1109.3 331.184 1108.04 330.993C1105.03 330.536 1102.2 332.611 1101.74 335.626C1101.27 338.64 1103.34 341.457 1106.36 341.913C1109.37 342.37 1112.2 340.295 1112.66 337.281C1112.86 336.021 1112.4 334.207 1111.65 333.183ZM1106.59 340.382C1104.42 340.052 1102.93 338.032 1103.27 335.858C1103.6 333.708 1105.63 332.195 1107.81 332.525C1109.98 332.854 1111.46 334.899 1111.13 337.049C1110.79 339.223 1108.77 340.711 1106.59 340.382ZM1119.88 332.812C1117.21 332.407 1114.7 334.252 1114.29 336.92L1113.47 342.207C1113.41 342.627 1113.67 343.022 1114.09 343.086C1114.51 343.149 1114.91 342.856 1114.98 342.436L1115.8 337.149C1116.08 335.32 1117.79 334.062 1119.64 334.343C1121.47 334.62 1122.73 336.328 1122.45 338.156L1121.63 343.443C1121.56 343.863 1121.86 344.237 1122.28 344.3C1122.7 344.364 1123.07 344.092 1123.14 343.671L1123.95 338.384C1124.37 335.716 1122.55 333.216 1119.88 332.812ZM1137.13 335.601C1137.04 335.512 1136.85 335.433 1136.73 335.414C1136.51 335.381 1136.19 335.484 1136.03 335.663L1129.26 343.31L1127.75 334.585C1127.69 334.298 1127.41 334.027 1127.11 333.982C1126.69 333.919 1126.29 334.212 1126.22 334.632C1126.21 334.706 1126.22 334.809 1126.21 334.858L1127.95 344.779L1124.67 348.48C1124.58 348.568 1124.5 348.758 1124.48 348.881C1124.41 349.326 1124.7 349.724 1125.12 349.788C1125.37 349.825 1125.67 349.694 1125.85 349.494L1137.21 336.701C1137.28 336.61 1137.36 336.42 1137.38 336.296C1137.41 336.074 1137.31 335.755 1137.13 335.601Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="mysql"  onMouseOver={() => changeHoverID(11)} >
                <path id="path316_9" d="M910.507 163.841C909.851 163.741 909.195 163.632 908.538 163.511L908.536 163.511C907.788 163.376 907.047 163.225 906.311 163.065C940.124 168.093 972.085 146.498 977.148 113.734C982.209 80.9846 958.245 51.0285 924.465 45.911C924.448 45.9085 924.434 45.9063 924.417 45.9038C925.167 45.9667 925.921 46.0398 926.674 46.1273C927.452 46.2186 928.219 46.3228 928.987 46.4391C935.53 47.4303 941.711 49.3473 947.385 52.0307C951.739 54.0911 955.796 56.6043 959.492 59.4951C960.158 60.0163 960.815 60.5506 961.457 61.0971C966.223 65.1403 970.323 69.8386 973.614 75.0232C974.787 76.8748 975.858 78.7883 976.821 80.7553C978.775 84.7565 980.275 88.9813 981.26 93.3648C981.655 95.1226 981.967 96.9091 982.194 98.7141C982.681 102.604 982.766 106.593 982.416 110.636C982.305 111.902 982.152 113.176 981.954 114.453C981.877 114.956 981.793 115.452 981.702 115.948C980.981 119.924 979.859 123.729 978.379 127.336C977.697 129.003 976.938 130.625 976.108 132.205C974.058 136.104 971.572 139.727 968.721 143.032C967.376 144.592 965.951 146.079 964.45 147.491C960.264 151.432 955.5 154.785 950.315 157.451C946.24 159.546 941.905 161.216 937.387 162.413C935.491 162.916 933.562 163.336 931.605 163.67L931.615 163.683C931.556 163.694 931.497 163.702 931.436 163.71C931.329 163.725 931.219 163.739 931.111 163.757C930.657 163.831 930.201 163.894 929.747 163.958C929.215 164.032 928.685 164.104 928.151 164.166C927.693 164.22 927.233 164.266 926.77 164.309C926.233 164.361 925.695 164.405 925.154 164.441C924.695 164.473 924.235 164.503 923.776 164.525C923.225 164.55 922.672 164.568 922.118 164.58C921.93 164.586 921.739 164.588 921.551 164.593C921.287 164.597 921.023 164.6 920.757 164.601C920.186 164.604 919.615 164.593 919.043 164.578C918.603 164.567 918.162 164.561 917.72 164.542C917.375 164.526 917.03 164.505 916.683 164.484C916.424 164.467 916.166 164.449 915.908 164.429C915.495 164.401 915.084 164.38 914.671 164.341C913.995 164.282 913.317 164.199 912.64 164.118C912.295 164.078 911.952 164.045 911.607 163.998C911.241 163.95 910.874 163.896 910.507 163.841Z" fill="url(#paint54_radial_44_2485)"/>
                <path id="path436_8" d="M906.189 163C905.636 162.917 905.082 162.826 904.528 162.727C904.401 162.706 904.272 162.683 904.145 162.659C904.078 162.647 904.014 162.635 903.947 162.622C879.876 158.137 861.634 141.123 855.242 120.225C852.811 112.274 852.093 103.763 853.422 95.1644C853.426 95.1361 853.431 95.1078 853.435 95.0795C853.436 95.0724 853.437 95.0653 853.439 95.0559C853.442 95.0346 853.445 95.0134 853.449 94.9922C853.45 94.9851 853.451 94.978 853.452 94.9709C853.456 94.9474 853.46 94.9214 853.464 94.8978C853.465 94.8931 853.465 94.8908 853.466 94.886C854.821 86.3982 858.057 78.5771 862.729 71.7728C865.049 68.3925 867.724 65.2639 870.699 62.4271C872.941 76.6942 877.796 84.1856 882.58 88.4442C883.689 89.431 884.814 90.2633 885.952 90.9694L887.594 91.8885L889.176 92.7623L890.702 93.4464L891.43 93.7378L892.746 94.1182L894.004 94.3089C895.369 94.6316 896.749 94.779 898.098 94.9834C899.056 95.1285 900.007 95.2558 900.949 95.3815C901.891 95.5073 902.823 95.6315 903.742 95.7708C906.777 96.2306 909.669 96.8546 912.292 98.2448L914.782 99.9022L915.848 100.788L917.688 102.905C917.92 103.213 918.145 103.535 918.368 103.87C926.826 116.659 916.687 131.705 921.528 150.38C922.531 154.247 924.226 158.475 927.111 162.82C920.362 163.974 913.312 164.08 906.189 163Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_9" d="M906.214 162.893C905.657 162.809 905.103 162.718 904.545 162.619C905.099 162.717 905.653 162.808 906.206 162.892C913.329 163.971 920.379 163.865 927.128 162.711C924.242 158.366 922.548 154.138 921.545 150.271C916.704 131.596 926.843 116.55 918.385 103.762C918.162 103.426 917.937 103.105 917.705 102.797L915.791 100.598L914.95 99.9276L912.309 98.1361C909.686 96.746 906.794 96.1219 903.759 95.6621C902.84 95.5229 901.908 95.3987 900.966 95.2729C900.024 95.1471 899.073 95.0199 898.115 94.8748C896.766 94.6704 895.404 94.4303 894.039 94.1076L892.525 93.8782L889.344 92.7876L885.968 90.8607C884.831 90.1546 883.705 89.3223 882.597 88.3356C877.813 84.077 872.958 76.5855 870.715 62.3185C880.49 52.9975 893.504 46.8435 907.815 45.3571C912.512 44.8706 917.346 44.8879 922.255 45.46C923.006 45.5473 923.759 45.6469 924.502 45.7594C924.518 45.7619 924.533 45.7641 924.55 45.7666C958.329 50.8841 982.293 80.8402 977.233 113.59C972.17 146.354 940.208 167.949 906.395 162.921C906.334 162.911 906.275 162.902 906.214 162.893ZM853.452 94.9708C853.453 94.9637 853.454 94.9543 853.456 94.9472C853.454 94.9567 853.453 94.9637 853.452 94.9708Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="SQL" d="M896.154 89.7666C898.468 90.1171 900.048 92.268 899.691 94.5806C899.613 95.0846 899.964 95.5626 900.468 95.639C900.972 95.7154 901.452 95.3632 901.53 94.8592C902.043 91.5386 899.761 88.4317 896.438 87.9284C893.116 87.4252 889.971 89.7097 889.457 93.0303C888.944 96.3509 891.252 99.4919 894.574 99.9952C896.887 100.346 898.468 102.497 898.11 104.809C897.753 107.122 895.596 108.706 893.282 108.356C890.968 108.006 889.388 105.855 889.746 103.542C889.823 103.038 889.472 102.56 888.968 102.484C888.434 102.403 887.955 102.755 887.877 103.259C887.364 106.58 889.676 109.691 892.998 110.194C896.32 110.697 899.436 108.408 899.949 105.088C900.462 101.767 898.185 98.6307 894.862 98.1274C892.549 97.7769 890.969 95.626 891.326 93.3134C891.683 91.0009 893.841 89.4161 896.154 89.7666ZM921.621 110.495C923.31 108.991 924.992 105.969 925.34 103.715C926.293 97.5486 922.079 91.8128 915.939 90.8827C911.846 90.2626 906.777 92.6198 904.627 96.1173C903.944 97.1972 903.256 99.0956 903.064 100.341C902.116 106.478 906.329 112.214 912.499 113.148C914.753 113.49 918.14 112.789 920.085 111.597L922.166 114.431C922.292 114.602 922.57 114.765 922.778 114.797C923.282 114.873 923.761 114.521 923.839 114.017C923.871 113.809 923.798 113.495 923.673 113.324L921.621 110.495ZM913.67 101.25C913.498 101.375 913.304 101.649 913.268 101.887C913.235 102.094 913.338 102.413 913.463 102.584L918.981 110.095C917.379 111.036 914.597 111.555 912.787 111.281C907.656 110.503 904.145 105.723 904.933 100.624C905.725 95.4948 910.519 91.9731 915.651 92.7505C920.752 93.5234 924.293 98.3077 923.501 103.437C923.192 105.241 921.864 107.74 920.492 108.959L914.975 101.447C914.849 101.277 914.571 101.113 914.363 101.082C914.156 101.05 913.841 101.124 913.67 101.25ZM939.063 115.322L929.27 113.869L932.302 94.2415C932.38 93.7375 932.029 93.2595 931.525 93.1831C931.021 93.1067 930.541 93.4589 930.463 93.9629L927.289 114.509C927.257 114.717 927.329 115.031 927.455 115.202C927.58 115.372 927.858 115.536 928.066 115.567L938.778 117.16C939.283 117.236 939.762 116.884 939.84 116.38C939.918 115.876 939.567 115.398 939.063 115.322Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="api"  onMouseOver={() => changeHoverID(10)} >
                <path id="path316_10" d="M788.647 271.591C787.991 271.492 787.335 271.383 786.678 271.262L786.676 271.261C785.928 271.126 785.187 270.976 784.451 270.816C818.264 275.844 850.225 254.249 855.288 221.485C860.349 188.735 836.385 158.779 802.605 153.662C802.588 153.659 802.574 153.657 802.557 153.655C803.307 153.717 804.061 153.79 804.814 153.878C805.592 153.969 806.359 154.074 807.127 154.19C813.67 155.181 819.85 157.098 825.525 159.781C829.879 161.842 833.936 164.355 837.632 167.246C838.298 167.767 838.955 168.301 839.597 168.848C844.363 172.891 848.463 177.589 851.754 182.774C852.927 184.625 853.998 186.539 854.961 188.506C856.915 192.507 858.415 196.732 859.4 201.116C859.795 202.873 860.107 204.66 860.334 206.465C860.821 210.355 860.906 214.343 860.556 218.387C860.445 219.653 860.291 220.927 860.094 222.204C860.016 222.706 859.933 223.203 859.842 223.699C859.121 227.674 857.999 231.48 856.519 235.087C855.837 236.754 855.078 238.376 854.248 239.955C852.198 243.855 849.712 247.478 846.861 250.783C845.516 252.342 844.091 253.829 842.59 255.242C838.404 259.183 833.64 262.536 828.455 265.202C824.38 267.297 820.045 268.967 815.527 270.164C813.631 270.666 811.702 271.087 809.745 271.421L809.755 271.434C809.696 271.445 809.637 271.453 809.576 271.46C809.469 271.475 809.359 271.49 809.251 271.508C808.797 271.581 808.341 271.645 807.887 271.709C807.355 271.783 806.824 271.855 806.29 271.917C805.833 271.97 805.373 272.017 804.91 272.06C804.373 272.112 803.835 272.156 803.294 272.192C802.835 272.224 802.375 272.253 801.916 272.276C801.364 272.301 800.812 272.318 800.258 272.331C800.07 272.336 799.879 272.339 799.691 272.344C799.427 272.348 799.163 272.351 798.897 272.352C798.326 272.355 797.755 272.343 797.183 272.329C796.743 272.318 796.302 272.311 795.86 272.293C795.514 272.277 795.17 272.256 794.822 272.235C794.564 272.217 794.306 272.2 794.048 272.18C793.635 272.151 793.224 272.13 792.811 272.092C792.135 272.033 791.456 271.949 790.78 271.869C790.435 271.829 790.092 271.796 789.747 271.748C789.381 271.7 789.014 271.647 788.647 271.591Z" fill="url(#paint55_radial_44_2485)"/>
                <path id="path436_9" d="M784.329 270.751C783.776 270.668 783.222 270.576 782.668 270.478C782.541 270.456 782.411 270.434 782.285 270.41C782.218 270.398 782.154 270.386 782.087 270.373C758.016 265.888 739.774 248.874 733.382 227.976C730.951 220.025 730.233 211.513 731.562 202.915C731.566 202.887 731.571 202.859 731.575 202.83C731.576 202.823 731.577 202.816 731.579 202.807C731.582 202.786 731.585 202.764 731.589 202.743C731.59 202.736 731.591 202.729 731.592 202.722C731.596 202.698 731.6 202.672 731.604 202.649C731.604 202.644 731.605 202.642 731.606 202.637C732.961 194.149 736.197 186.328 740.869 179.524C743.189 176.143 745.864 173.015 748.839 170.178C751.081 184.445 755.936 191.936 760.72 196.195C761.829 197.182 762.954 198.014 764.091 198.72L765.734 199.639L767.316 200.513L768.842 201.197L769.57 201.489L770.886 201.869L772.144 202.06C773.509 202.382 774.889 202.53 776.238 202.734C777.196 202.879 778.147 203.007 779.089 203.132C780.031 203.258 780.963 203.382 781.882 203.522C784.917 203.981 787.809 204.605 790.432 205.996L792.922 207.653L793.988 208.539L795.828 210.656C796.06 210.964 796.285 211.286 796.508 211.621C804.966 224.41 794.827 239.456 799.668 258.131C800.671 261.998 802.366 266.225 805.251 270.571C798.502 271.725 791.452 271.831 784.329 270.751Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_10" d="M784.354 270.644C783.797 270.559 783.243 270.468 782.685 270.369C783.239 270.468 783.793 270.559 784.346 270.643C791.469 271.722 798.519 271.616 805.268 270.462C802.382 266.117 800.688 261.889 799.685 258.022C794.843 239.347 804.983 224.301 796.525 211.513C796.302 211.177 796.076 210.855 795.845 210.547L793.931 208.349L793.09 207.678L790.449 205.887C787.825 204.497 784.934 203.873 781.899 203.413C780.979 203.274 780.048 203.149 779.106 203.024C778.164 202.898 777.213 202.771 776.255 202.625C774.906 202.421 773.544 202.181 772.179 201.858L770.665 201.629L767.484 200.538L764.108 198.611C762.971 197.905 761.845 197.073 760.737 196.086C755.952 191.828 751.098 184.336 748.855 170.069C758.63 160.748 771.644 154.594 785.955 153.108C790.652 152.621 795.486 152.639 800.395 153.211C801.146 153.298 801.899 153.398 802.642 153.51C802.658 153.513 802.672 153.515 802.689 153.517C836.469 158.635 860.433 188.591 855.373 221.341C850.31 254.105 818.348 275.7 784.535 270.671C784.474 270.662 784.415 270.653 784.354 270.644ZM731.592 202.722C731.593 202.714 731.594 202.705 731.595 202.698C731.594 202.707 731.593 202.714 731.592 202.722Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="RestAPI" d="M762.482 203.556C762.821 201.362 762.013 198.145 760.709 196.369C759.404 194.594 756.601 192.895 754.406 192.562L754.376 192.558C753.872 192.481 753.393 192.834 753.315 193.338L750.14 213.884C750.062 214.388 750.413 214.866 750.918 214.942C751.422 215.019 751.901 214.666 751.979 214.162L752.263 212.324L757.808 215.925C757.893 215.969 758.066 216.025 758.185 216.043C758.689 216.12 759.168 215.767 759.246 215.263C759.297 214.937 759.119 214.516 758.845 214.323L754.648 211.624C755.864 211.413 757.622 210.648 758.615 209.919C760.396 208.611 762.138 205.78 762.477 203.586C762.477 203.586 762.477 203.586 762.482 203.556ZM755.003 194.595C758.785 195.653 761.213 199.389 760.613 203.273C760.009 207.186 756.564 210.033 752.634 209.923L755.003 194.595ZM773.654 215.443C772.855 215.899 771.447 216.171 770.527 216.032C767.947 215.641 766.166 213.217 766.565 210.637C766.963 208.058 769.394 206.272 771.975 206.663C772.568 206.753 773.456 207.1 773.948 207.447L768.104 211.477C767.869 211.624 767.705 211.902 767.668 212.14C767.59 212.644 767.912 213.117 768.446 213.198C768.653 213.229 768.968 213.156 769.144 213L775.972 208.3C776.173 208.179 776.337 207.9 776.369 207.693C776.406 207.456 776.308 207.107 776.153 206.932C775.273 205.949 773.534 205.018 772.259 204.825C768.67 204.281 765.28 206.771 764.726 210.359C764.167 213.976 766.654 217.326 770.243 217.87C771.519 218.063 773.459 217.69 774.591 217.042C774.821 216.925 775.05 216.626 775.091 216.359C775.169 215.855 774.818 215.377 774.313 215.301C774.106 215.269 773.825 215.318 773.654 215.443ZM781.255 211.953C780.217 211.795 779.515 210.839 779.675 209.802C779.835 208.764 780.794 208.06 781.832 208.217C782.515 208.32 783.183 208.907 783.383 209.575C783.456 209.889 783.805 210.185 784.131 210.234C784.606 210.306 785.081 209.983 785.159 209.479C785.177 209.361 785.175 209.178 785.129 209.081C784.783 207.784 783.417 206.606 782.112 206.408C780.095 206.103 778.182 207.482 777.866 209.528C777.554 211.544 778.959 213.456 780.976 213.761C782.014 213.918 782.716 214.874 782.556 215.912C782.395 216.95 781.437 217.654 780.399 217.497C779.746 217.398 779.053 216.777 778.877 216.144C778.775 215.825 778.456 215.534 778.129 215.484C777.625 215.408 777.175 215.765 777.102 216.239C777.084 216.357 777.086 216.54 777.102 216.633C777.452 217.9 778.814 219.108 780.119 219.305C782.166 219.615 784.054 218.202 784.365 216.186C784.681 214.14 783.302 212.263 781.255 211.953ZM794.54 209.141C795.044 209.217 795.523 208.865 795.601 208.361C795.679 207.857 795.328 207.379 794.824 207.303L790.019 206.575L791.159 199.192C791.237 198.688 790.886 198.21 790.382 198.134C789.878 198.057 789.398 198.41 789.32 198.914L787.062 213.53C786.498 217.177 789.006 220.591 792.655 221.144L792.684 221.148C793.189 221.225 793.663 220.902 793.746 220.368C793.824 219.864 793.473 219.386 792.968 219.31C790.328 218.91 788.493 216.447 788.901 213.809L789.735 208.413L794.54 209.141ZM809.642 201.507C809.574 201.163 809.23 200.837 808.874 200.784C808.518 200.73 808.091 200.938 807.922 201.246L796.649 220.566C796.606 220.65 796.554 220.794 796.535 220.912C796.457 221.416 796.808 221.894 797.313 221.971C797.669 222.025 798.095 221.816 798.264 221.508L808.338 204.252L810.354 213.205L807.21 212.729C806.676 212.648 806.197 213 806.119 213.504C806.041 214.008 806.392 214.486 806.926 214.567L810.812 215.156L812.739 223.701C812.808 224.045 813.152 224.37 813.508 224.424C814.012 224.501 814.492 224.148 814.569 223.644C814.588 223.526 814.581 223.373 814.565 223.28L809.642 201.507ZM822.025 202.928C821.521 202.851 821.041 203.203 820.963 203.707L817.825 224.016C817.743 224.55 818.098 224.998 818.603 225.075C819.107 225.151 819.582 224.829 819.664 224.295L820.031 221.923C820.9 221.994 822.26 221.836 823.116 221.602C824.036 221.346 825.449 220.65 826.202 220.097C827.983 218.789 829.691 215.983 830.026 213.819C830.36 211.654 829.577 208.471 828.268 206.726C826.994 204.955 824.19 203.256 822.055 202.932C822.025 202.928 822.025 202.928 822.025 202.928ZM822.651 204.964C826.375 206.014 828.782 209.686 828.187 213.54C827.591 217.394 824.18 220.215 820.315 220.085L822.651 204.964ZM832.15 227.339C832.654 227.416 833.133 227.064 833.211 226.56L836.386 206.013L836.391 205.984C836.468 205.48 836.117 205.002 835.613 204.925C835.109 204.849 834.629 205.201 834.552 205.705L834.547 205.735L831.372 226.281C831.294 226.785 831.645 227.263 832.15 227.339Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="php"  onMouseOver={() => changeHoverID(12)} >
                <path id="path316_11" d="M950.993 316.219C950.236 316.105 949.479 315.979 948.721 315.838L948.718 315.838C947.856 315.682 947.001 315.507 946.151 315.322C985.166 321.123 1022.1 295.875 1028 257.65C1033.91 219.442 1006.31 184.547 967.331 178.643C967.311 178.64 967.295 178.637 967.275 178.634C968.141 178.706 969.01 178.79 969.879 178.891C970.778 178.996 971.663 179.116 972.548 179.25C980.098 180.394 987.228 182.618 993.772 185.737C998.793 188.132 1003.47 191.056 1007.73 194.42C1008.5 195.027 1009.26 195.649 1010 196.285C1015.49 200.992 1020.21 206.464 1024 212.505C1025.35 214.663 1026.58 216.892 1027.69 219.185C1029.94 223.848 1031.66 228.773 1032.79 233.884C1033.24 235.933 1033.6 238.016 1033.86 240.121C1034.41 244.658 1034.5 249.31 1034.09 254.027C1033.96 255.503 1033.78 256.989 1033.55 258.479C1033.46 259.065 1033.36 259.645 1033.26 260.224C1032.41 264.862 1031.11 269.303 1029.4 273.512C1028.61 275.458 1027.73 277.351 1026.77 279.195C1024.39 283.747 1021.52 287.978 1018.22 291.838C1016.66 293.66 1015.02 295.397 1013.28 297.047C1008.44 301.652 1002.94 305.572 996.949 308.691C992.242 311.143 987.236 313.098 982.019 314.503C979.83 315.093 977.603 315.587 975.343 315.98L975.354 315.996C975.286 316.008 975.219 316.017 975.149 316.027C975.024 316.044 974.897 316.062 974.773 316.082C974.249 316.169 973.722 316.244 973.198 316.32C972.585 316.407 971.972 316.492 971.355 316.565C970.828 316.629 970.296 316.683 969.762 316.735C969.142 316.796 968.521 316.849 967.896 316.892C967.367 316.93 966.836 316.965 966.306 316.992C965.669 317.022 965.032 317.044 964.392 317.06C964.175 317.067 963.955 317.07 963.737 317.076C963.433 317.081 963.128 317.086 962.821 317.087C962.163 317.091 961.504 317.079 960.843 317.063C960.335 317.051 959.826 317.045 959.317 317.024C958.918 317.006 958.52 316.982 958.119 316.958C957.821 316.938 957.523 316.918 957.225 316.896C956.749 316.863 956.274 316.839 955.798 316.795C955.018 316.728 954.235 316.632 953.454 316.539C953.057 316.493 952.661 316.455 952.262 316.4C951.84 316.345 951.416 316.283 950.993 316.219Z" fill="url(#paint56_radial_44_2485)"/>
                <path id="path436_10" d="M946.011 315.248C945.373 315.151 944.734 315.046 944.095 314.932C943.948 314.907 943.799 314.881 943.653 314.854C943.575 314.839 943.501 314.825 943.424 314.811C915.651 309.625 894.631 289.815 887.294 265.452C884.503 256.184 883.692 246.257 885.242 236.226C885.247 236.193 885.252 236.16 885.257 236.127C885.258 236.118 885.26 236.11 885.261 236.099C885.265 236.074 885.269 236.049 885.273 236.025C885.274 236.016 885.276 236.008 885.277 236C885.281 235.972 885.286 235.942 885.291 235.915C885.291 235.909 885.292 235.906 885.293 235.901C886.873 225.998 890.624 216.87 896.029 208.925C898.713 204.978 901.806 201.323 905.245 198.009C907.805 214.645 913.394 223.374 918.908 228.332C920.185 229.481 921.482 230.449 922.794 231.271L924.687 232.34L926.512 233.356L928.272 234.151L929.112 234.489L930.629 234.931L932.081 235.151C933.656 235.525 935.248 235.694 936.805 235.93C937.91 236.097 939.008 236.244 940.094 236.389C941.181 236.534 942.256 236.677 943.317 236.837C946.819 237.368 950.155 238.09 953.18 239.707L956.051 241.635L957.279 242.667L959.399 245.132C959.666 245.491 959.925 245.866 960.181 246.257C969.918 261.157 958.187 278.725 963.739 300.498C964.889 305.007 966.837 309.934 970.158 314.997C962.367 316.356 954.23 316.493 946.011 315.248Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_11" d="M946.04 315.122C945.397 315.025 944.758 314.92 944.115 314.805C944.753 314.919 945.392 315.024 946.03 315.121C954.25 316.366 962.386 316.229 970.178 314.87C966.856 309.808 964.909 304.88 963.759 300.371C958.207 278.598 969.938 261.03 960.201 246.13C959.944 245.739 959.685 245.364 959.419 245.005L957.214 242.445L956.245 241.664L953.199 239.58C950.175 237.963 946.838 237.241 943.337 236.71C942.276 236.55 941.201 236.407 940.114 236.262C939.027 236.117 937.93 235.97 936.825 235.803C935.268 235.567 933.696 235.289 932.122 234.916L930.375 234.651L926.706 233.385L922.813 231.144C921.502 230.323 920.204 229.354 918.927 228.205C913.413 223.247 907.825 214.518 905.264 197.882C916.564 186.992 931.595 179.789 948.116 178.028C953.538 177.452 959.117 177.463 964.781 178.121C965.648 178.221 966.517 178.336 967.373 178.466C967.393 178.469 967.409 178.471 967.429 178.474C1006.41 184.379 1034.01 219.273 1028.1 257.482C1022.19 295.706 985.264 320.954 946.249 315.154C946.179 315.143 946.11 315.133 946.04 315.122ZM885.277 236C885.278 235.991 885.28 235.98 885.281 235.972C885.279 235.983 885.278 235.991 885.277 236Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="PHP" d="M928.37 221.982C927.529 221.854 926.73 222.441 926.6 223.281L921.37 257.13C921.233 258.019 921.825 258.766 922.666 258.894C923.506 259.021 924.298 258.484 924.435 257.594L925.046 253.641C926.495 253.759 928.762 253.496 930.188 253.105C931.721 252.68 934.076 251.52 935.331 250.597C938.299 248.417 941.147 243.741 941.704 240.134C942.261 236.527 940.956 231.221 938.775 228.312C936.651 225.36 931.978 222.528 928.419 221.989C928.37 221.982 928.37 221.982 928.37 221.982ZM929.413 225.376C935.619 227.126 939.631 233.246 938.639 239.669C937.646 246.093 931.962 250.795 925.519 250.577L929.413 225.376ZM945.218 262.512C946.058 262.64 946.857 262.053 946.987 261.213L948.529 251.231L968.303 254.227L966.761 264.208C966.681 265.056 967.274 265.803 968.114 265.931C968.954 266.058 969.746 265.52 969.876 264.68L975.175 230.387C975.304 229.547 974.719 228.751 973.879 228.623C973.038 228.496 972.239 229.083 972.06 229.915L968.785 251.114L949.01 248.118L952.278 226.969C952.408 226.129 951.823 225.332 950.982 225.205C950.142 225.078 949.343 225.665 949.213 226.505L943.922 260.748C943.792 261.588 944.377 262.385 945.218 262.512ZM982.681 230.21C981.841 230.082 981.042 230.669 980.912 231.509L975.682 265.358C975.545 266.247 976.137 266.994 976.978 267.122C977.818 267.249 978.61 266.711 978.747 265.822L979.358 261.869C980.807 261.987 983.074 261.724 984.5 261.333C986.033 260.908 988.388 259.747 989.643 258.825C992.611 256.645 995.458 251.969 996.016 248.362C996.573 244.754 995.268 239.449 993.087 236.54C990.963 233.588 986.29 230.756 982.731 230.217C982.681 230.21 982.681 230.21 982.681 230.21ZM983.725 233.604C989.931 235.354 993.943 241.474 992.951 247.897C991.958 254.321 986.274 259.023 979.831 258.805L983.725 233.604Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="git"  onMouseOver={() => changeHoverID(15)} >
                <path id="path316_12" d="M1244.97 314.613C1244.31 314.514 1243.66 314.405 1243 314.284L1243 314.283C1242.25 314.148 1241.51 313.997 1240.77 313.838C1274.58 318.866 1306.55 297.271 1311.61 264.507C1316.67 231.757 1292.71 201.801 1258.93 196.684C1258.91 196.681 1258.89 196.679 1258.88 196.676C1259.63 196.739 1260.38 196.812 1261.13 196.9C1261.91 196.991 1262.68 197.095 1263.45 197.212C1269.99 198.203 1276.17 200.12 1281.85 202.803C1286.2 204.864 1290.26 207.377 1293.95 210.268C1294.62 210.789 1295.28 211.323 1295.92 211.87C1300.68 215.913 1304.78 220.611 1308.07 225.796C1309.25 227.647 1310.32 229.561 1311.28 231.528C1313.24 235.529 1314.74 239.754 1315.72 244.137C1316.12 245.895 1316.43 247.682 1316.66 249.487C1317.14 253.377 1317.23 257.365 1316.88 261.409C1316.77 262.675 1316.61 263.949 1316.41 265.225C1316.34 265.728 1316.25 266.225 1316.16 266.721C1315.44 270.696 1314.32 274.502 1312.84 278.109C1312.16 279.776 1311.4 281.398 1310.57 282.977C1308.52 286.877 1306.03 290.5 1303.18 293.805C1301.84 295.364 1300.41 296.851 1298.91 298.264C1294.72 302.205 1289.96 305.558 1284.78 308.224C1280.7 310.319 1276.37 311.988 1271.85 313.186C1269.95 313.688 1268.02 314.109 1266.07 314.442L1266.08 314.456C1266.02 314.466 1265.96 314.474 1265.9 314.482C1265.79 314.497 1265.68 314.512 1265.57 314.529C1265.12 314.603 1264.66 314.667 1264.21 314.731C1263.68 314.805 1263.15 314.877 1262.61 314.938C1262.15 314.992 1261.69 315.038 1261.23 315.082C1260.69 315.133 1260.16 315.178 1259.61 315.214C1259.16 315.246 1258.7 315.275 1258.24 315.297C1257.69 315.323 1257.13 315.34 1256.58 315.353C1256.39 315.358 1256.2 315.361 1256.01 315.366C1255.75 315.37 1255.48 315.373 1255.22 315.374C1254.65 315.377 1254.08 315.365 1253.5 315.351C1253.06 315.34 1252.62 315.333 1252.18 315.315C1251.84 315.299 1251.49 315.278 1251.14 315.257C1250.88 315.239 1250.63 315.222 1250.37 315.202C1249.96 315.173 1249.54 315.152 1249.13 315.114C1248.46 315.055 1247.78 314.971 1247.1 314.891C1246.76 314.85 1246.41 314.818 1246.07 314.77C1245.7 314.722 1245.33 314.669 1244.97 314.613Z" fill="url(#paint57_radial_44_2485)"/>
                <path id="path436_11" d="M1240.65 313.773C1240.1 313.69 1239.54 313.598 1238.99 313.5C1238.86 313.478 1238.73 313.456 1238.61 313.432C1238.54 313.42 1238.47 313.408 1238.41 313.395C1214.34 308.91 1196.09 291.896 1189.7 270.998C1187.27 263.047 1186.55 254.536 1187.88 245.937C1187.89 245.909 1187.89 245.881 1187.9 245.852C1187.9 245.845 1187.9 245.838 1187.9 245.829C1187.9 245.808 1187.91 245.786 1187.91 245.765C1187.91 245.758 1187.91 245.751 1187.91 245.744C1187.92 245.72 1187.92 245.694 1187.92 245.671C1187.93 245.666 1187.93 245.664 1187.93 245.659C1189.28 237.171 1192.52 229.35 1197.19 222.546C1199.51 219.165 1202.18 216.037 1205.16 213.2C1207.4 227.467 1212.26 234.959 1217.04 239.217C1218.15 240.204 1219.27 241.036 1220.41 241.742L1222.05 242.661L1223.64 243.535L1225.16 244.219L1225.89 244.511L1227.21 244.891L1228.47 245.082C1229.83 245.405 1231.21 245.552 1232.56 245.756C1233.52 245.901 1234.47 246.029 1235.41 246.154C1236.35 246.28 1237.28 246.404 1238.2 246.544C1241.24 247.004 1244.13 247.628 1246.75 249.018L1249.24 250.675L1250.31 251.561L1252.15 253.678C1252.38 253.986 1252.61 254.308 1252.83 254.643C1261.29 267.432 1251.15 282.478 1255.99 301.153C1256.99 305.02 1258.69 309.247 1261.57 313.593C1254.82 314.747 1247.77 314.853 1240.65 313.773Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_12" d="M1240.67 313.666C1240.12 313.582 1239.56 313.49 1239.01 313.391C1239.56 313.49 1240.11 313.581 1240.67 313.665C1247.79 314.744 1254.84 314.638 1261.59 313.484C1258.7 309.139 1257.01 304.911 1256.01 301.044C1251.16 282.369 1261.3 267.323 1252.85 254.535C1252.62 254.199 1252.4 253.877 1252.17 253.569L1250.25 251.371L1249.41 250.7L1246.77 248.909C1244.15 247.519 1241.25 246.895 1238.22 246.435C1237.3 246.296 1236.37 246.172 1235.43 246.046C1234.48 245.92 1233.53 245.793 1232.58 245.648C1231.23 245.443 1229.86 245.203 1228.5 244.88L1226.99 244.651L1223.8 243.56L1220.43 241.634C1219.29 240.927 1218.17 240.095 1217.06 239.108C1212.27 234.85 1207.42 227.358 1205.18 213.091C1214.95 203.77 1227.96 197.616 1242.28 196.13C1246.97 195.643 1251.81 195.661 1256.72 196.233C1257.47 196.32 1258.22 196.42 1258.96 196.532C1258.98 196.535 1258.99 196.537 1259.01 196.539C1292.79 201.657 1316.75 231.613 1311.69 264.363C1306.63 297.127 1274.67 318.722 1240.86 313.693C1240.79 313.684 1240.74 313.675 1240.67 313.666ZM1187.91 245.744C1187.91 245.737 1187.91 245.727 1187.92 245.72C1187.91 245.729 1187.91 245.737 1187.91 245.744Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="GIT" d="M1239.48 241.821C1239.48 241.821 1239.48 241.821 1239.51 241.826C1242 242.203 1245.02 244.269 1246.26 246.46C1246.38 246.69 1246.68 246.887 1246.92 246.923C1247.45 247.004 1247.93 246.652 1248.01 246.148C1248.04 245.97 1247.99 245.69 1247.89 245.523C1247.2 244.326 1245.69 242.672 1244.54 241.86C1243.33 241.04 1241.19 240.169 1239.77 239.954C1233.57 239.014 1227.78 243.295 1226.82 249.462C1225.87 255.659 1230.1 261.458 1236.3 262.397C1237.75 262.617 1240.03 262.416 1241.43 261.991C1242.77 261.558 1244.71 260.425 1245.74 259.488C1245.88 259.357 1246.01 259.104 1246.03 258.926C1246.08 258.659 1245.95 258.306 1245.73 258.122L1237.56 250.33C1237.45 250.223 1237.23 250.098 1237.05 250.071C1236.55 249.994 1236.07 250.347 1235.99 250.88C1235.94 251.147 1236.07 251.5 1236.26 251.68L1243.69 258.754C1241.94 260.066 1238.75 260.857 1236.59 260.529C1231.43 259.748 1227.87 254.899 1228.66 249.741C1229.46 244.582 1234.32 241.04 1239.48 241.821ZM1250.02 264.536C1250.52 264.612 1251 264.26 1251.08 263.756L1254.25 243.21L1254.26 243.18C1254.34 242.676 1253.99 242.198 1253.48 242.122C1252.98 242.046 1252.5 242.398 1252.42 242.902L1252.41 242.931L1249.24 263.478C1249.16 263.982 1249.51 264.46 1250.02 264.536ZM1272 244.927L1257.79 242.775C1257.29 242.698 1256.81 243.051 1256.72 243.584C1256.65 244.088 1257 244.566 1257.5 244.643L1263.67 245.577L1260.67 265.026C1260.58 265.56 1260.93 266.038 1261.47 266.119C1261.97 266.195 1262.45 265.843 1262.53 265.31L1265.54 245.86L1271.71 246.795C1272.21 246.871 1272.69 246.519 1272.77 246.015C1272.85 245.482 1272.5 245.004 1272 244.927Z" fill="white" fillOpacity="0.5"/>
                </g>
                </g>
                <g id="Group 26">
                <g id="NODEJS"  onMouseOver={() => changeHoverID(5)} >
                <path id="path316_13" d="M337.582 233.481C336.93 233.601 336.274 233.711 335.613 233.81L335.611 233.81C334.86 233.926 334.11 234.024 333.361 234.112C366.968 227.874 390.002 197.089 383.924 164.495C377.849 131.914 345.284 111.405 311.679 117.548C311.662 117.551 311.648 117.554 311.631 117.557C312.36 117.372 313.096 117.197 313.837 117.035C314.602 116.868 315.361 116.717 316.125 116.577C322.635 115.387 329.108 115.19 335.358 115.88C340.153 116.412 344.819 117.468 349.268 118.997C350.07 119.273 350.868 119.564 351.655 119.872C357.498 122.142 362.927 125.248 367.755 129.076C369.476 130.444 371.123 131.903 372.684 133.448C375.856 136.593 378.673 140.097 381.057 143.917C382.012 145.449 382.9 147.035 383.712 148.666C385.462 152.183 386.863 155.923 387.873 159.856C388.188 161.088 388.465 162.341 388.702 163.611C388.795 164.112 388.881 164.608 388.96 165.106C389.596 169.096 389.798 173.055 389.595 176.943C389.504 178.739 389.325 180.518 389.064 182.28C388.42 186.629 387.273 190.86 385.675 194.908C384.921 196.818 384.068 198.686 383.118 200.508C380.47 205.591 377.081 210.306 373.068 214.51C369.913 217.813 366.372 220.799 362.501 223.398C360.876 224.489 359.193 225.513 357.455 226.464L357.469 226.474C357.417 226.503 357.364 226.529 357.309 226.556C357.212 226.605 357.113 226.655 357.017 226.707C356.613 226.924 356.203 227.132 355.795 227.34C355.318 227.583 354.84 227.823 354.356 228.055C353.942 228.255 353.523 228.448 353.1 228.639C352.61 228.862 352.116 229.079 351.617 229.289C351.194 229.468 350.769 229.646 350.343 229.816C349.831 230.019 349.315 230.215 348.796 230.407C348.619 230.473 348.44 230.537 348.264 230.604C348.016 230.693 347.768 230.782 347.517 230.869C346.979 231.057 346.436 231.232 345.89 231.404C345.47 231.537 345.052 231.674 344.629 231.8C344.297 231.897 343.964 231.989 343.629 232.082C343.379 232.15 343.129 232.217 342.879 232.282C342.48 232.389 342.085 232.503 341.682 232.601C341.024 232.765 340.355 232.907 339.689 233.05C339.35 233.124 339.016 233.205 338.674 233.272C338.312 233.346 337.947 233.415 337.582 233.481Z" fill="url(#paint58_radial_44_2485)"/>
                <path id="path436_12" d="M333.225 234.091C332.675 234.192 332.122 234.285 331.566 234.372C331.439 234.393 331.309 234.415 331.181 234.433C331.114 234.443 331.049 234.452 330.982 234.462C306.757 238.048 283.886 227.904 270.922 210.241C265.99 203.521 262.491 195.713 260.896 187.16C260.891 187.132 260.886 187.103 260.88 187.075C260.879 187.068 260.878 187.061 260.876 187.052C260.872 187.031 260.868 187.009 260.864 186.988C260.863 186.981 260.862 186.974 260.86 186.967C260.856 186.944 260.851 186.918 260.847 186.894C260.846 186.89 260.846 186.887 260.845 186.883C259.312 178.424 259.777 169.985 261.934 162.039C263.006 158.092 264.495 154.268 266.365 150.621C273.212 163.37 280.281 168.868 286.212 171.336C287.586 171.908 288.925 172.329 290.233 172.626L292.089 172.961L293.874 173.272L295.542 173.422L296.326 173.461L297.695 173.393L298.947 173.164C300.343 173.025 301.696 172.716 303.038 172.471C303.991 172.296 304.932 172.107 305.863 171.92C306.794 171.733 307.715 171.548 308.63 171.38C311.649 170.828 314.588 170.478 317.526 170.939L320.428 171.695L321.728 172.186L324.169 173.588C324.489 173.803 324.808 174.034 325.13 174.279C337.359 183.61 332.768 201.117 343.531 217.185C345.761 220.512 348.763 223.955 352.928 227.122C346.936 230.405 340.312 232.796 333.225 234.091Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_13" d="M333.213 233.981C332.659 234.083 332.106 234.177 331.546 234.264C332.101 234.177 332.655 234.083 333.205 233.983C340.292 232.687 346.916 230.296 352.908 227.013C348.742 223.846 345.741 220.403 343.511 217.077C332.748 201.009 337.338 183.502 325.11 174.17C324.788 173.926 324.469 173.695 324.148 173.479L321.612 172.025L320.595 171.665L317.506 170.831C314.567 170.37 311.629 170.72 308.61 171.272C307.695 171.439 306.774 171.625 305.843 171.812C304.911 171.999 303.971 172.188 303.018 172.362C301.676 172.608 300.309 172.824 298.914 172.962L297.407 173.238L294.041 173.241L290.213 172.518C288.905 172.221 287.566 171.8 286.192 171.228C280.261 168.76 273.192 163.261 266.345 150.513C272.489 138.532 282.742 128.49 295.768 122.435C300.043 120.449 304.615 118.895 309.441 117.84C310.18 117.678 310.925 117.528 311.663 117.393C311.68 117.39 311.694 117.387 311.711 117.384C345.316 111.241 377.882 131.75 383.956 164.331C390.034 196.925 367 227.71 333.393 233.948C333.333 233.96 333.274 233.97 333.213 233.981ZM260.86 186.967C260.859 186.96 260.857 186.951 260.856 186.944C260.858 186.953 260.859 186.96 260.86 186.967Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="NodeJS" d="M288.971 168.142C288.44 168.239 288.103 168.727 288.202 169.258L291.447 186.658L275.945 170.95C275.753 170.741 275.366 170.629 275.101 170.677C274.599 170.769 274.263 171.257 274.362 171.788L278.162 192.167C278.26 192.698 278.751 193.035 279.252 192.944C279.754 192.852 280.12 192.358 280.021 191.827L276.776 174.427L292.278 190.135C292.47 190.344 292.827 190.462 293.122 190.408C293.624 190.316 293.96 189.828 293.861 189.297L290.062 168.918C289.963 168.387 289.472 168.05 288.971 168.142ZM305.403 176.696C304.173 175.823 301.947 175.346 300.442 175.621C296.842 176.279 294.465 179.733 295.136 183.331C295.806 186.929 299.272 189.314 302.873 188.656C306.473 187.998 308.85 184.544 308.179 180.946C307.899 179.442 306.664 177.564 305.403 176.696ZM302.532 186.828C299.935 187.302 297.449 185.592 296.965 182.996C296.487 180.43 298.186 177.924 300.783 177.449C303.38 176.975 305.871 178.715 306.35 181.281C306.834 183.876 305.129 186.353 302.532 186.828ZM318.983 162.777C318.482 162.869 318.146 163.357 318.239 163.859L320.956 178.428C321.445 181.052 319.716 183.564 317.09 184.044C314.463 184.525 311.942 182.79 311.453 180.165C310.964 177.54 312.693 175.028 315.319 174.548C315.968 174.429 317.021 174.511 317.666 174.698C317.795 174.736 317.983 174.762 318.101 174.741C318.633 174.644 318.939 174.161 318.846 173.659C318.791 173.364 318.513 173.019 318.22 172.92C317.346 172.653 315.893 172.552 314.978 172.72C311.348 173.383 308.947 176.872 309.623 180.499C310.3 184.127 313.801 186.536 317.431 185.873C321.06 185.209 323.462 181.721 322.785 178.093L320.069 163.524C319.975 163.023 319.485 162.686 318.983 162.777ZM334.851 179.822C334.247 180.511 333.007 181.226 332.092 181.393C329.525 181.863 327.039 180.152 326.561 177.586C326.082 175.02 327.787 172.543 330.355 172.074C330.945 171.966 331.898 172.005 332.479 172.174L328.294 177.879C328.12 178.094 328.057 178.41 328.101 178.646C328.195 179.148 328.655 179.49 329.186 179.393C329.393 179.356 329.666 179.184 329.781 178.98L334.673 172.321C334.823 172.142 334.886 171.825 334.847 171.619C334.803 171.383 334.595 171.085 334.391 170.97C333.233 170.328 331.283 170.013 330.014 170.245C326.443 170.898 324.066 174.352 324.731 177.92C325.402 181.518 328.862 183.875 332.433 183.222C333.702 182.99 335.411 182.007 336.266 181.027C336.445 180.842 336.561 180.485 336.512 180.219C336.418 179.718 335.928 179.381 335.427 179.472C335.22 179.51 334.971 179.647 334.851 179.822ZM341.633 180.412C342.781 180.842 344.699 180.98 345.939 180.753C350.454 179.928 353.431 175.602 352.59 171.089L350.132 157.907C350.038 157.405 349.548 157.068 349.046 157.16C348.515 157.257 348.179 157.745 348.273 158.246L350.731 171.429C351.38 174.909 349.08 178.288 345.598 178.924C343.585 179.262 340.907 178.318 339.561 176.826C339.364 176.587 338.977 176.475 338.681 176.529C338.18 176.621 337.844 177.109 337.937 177.611C337.965 177.758 338.062 177.954 338.143 178.061C338.95 178.95 340.49 180.011 341.633 180.412ZM359.112 157.271C361.414 156.851 363.619 158.369 364.048 160.669C364.142 161.17 364.632 161.508 365.133 161.416C365.635 161.324 365.971 160.836 365.878 160.335C365.262 157.032 362.076 154.839 358.771 155.443C355.466 156.047 353.251 159.227 353.867 162.53C354.483 165.833 357.704 168.05 361.009 167.446C363.311 167.025 365.516 168.543 365.945 170.844C366.374 173.144 364.861 175.342 362.56 175.763C360.258 176.184 358.052 174.665 357.623 172.365C357.53 171.864 357.04 171.526 356.538 171.618C356.007 171.715 355.67 172.204 355.764 172.705C356.38 176.008 359.595 178.195 362.9 177.591C366.206 176.987 368.391 173.812 367.775 170.509C367.159 167.206 363.968 164.984 360.662 165.588C358.361 166.009 356.155 164.491 355.726 162.19C355.297 159.89 356.81 157.692 359.112 157.271Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="vue"  onMouseOver={() => changeHoverID(8)} >
                <path id="path316_14" d="M605.335 284.217C604.683 284.336 604.026 284.446 603.366 284.545L603.363 284.546C602.613 284.661 601.863 284.759 601.114 284.847C634.721 278.609 657.755 247.824 651.677 215.23C645.602 182.649 613.036 162.14 579.431 168.283C579.414 168.286 579.4 168.289 579.384 168.292C580.113 168.108 580.849 167.932 581.59 167.77C582.355 167.603 583.114 167.452 583.878 167.313C590.387 166.123 596.861 165.925 603.111 166.616C607.906 167.147 612.571 168.203 617.021 169.732C617.823 170.008 618.621 170.299 619.408 170.607C625.25 172.878 630.68 175.983 635.508 179.811C637.229 181.179 638.876 182.638 640.437 184.184C643.608 187.328 646.426 190.832 648.809 194.652C649.765 196.184 650.652 197.77 651.465 199.402C653.214 202.918 654.616 206.658 655.626 210.592C655.941 211.823 656.218 213.076 656.455 214.347C656.548 214.847 656.634 215.343 656.713 215.841C657.349 219.831 657.55 223.79 657.348 227.678C657.257 229.475 657.077 231.253 656.816 233.015C656.173 237.365 655.025 241.595 653.427 245.643C652.674 247.553 651.821 249.421 650.871 251.243C648.223 256.326 644.834 261.042 640.82 265.245C637.665 268.548 634.124 271.534 630.253 274.133C628.629 275.224 626.946 276.248 625.208 277.199L625.221 277.209C625.169 277.238 625.117 277.264 625.062 277.291C624.965 277.341 624.866 277.39 624.77 277.442C624.366 277.659 623.956 277.867 623.548 278.076C623.071 278.318 622.593 278.559 622.109 278.79C621.695 278.99 621.275 279.183 620.853 279.374C620.363 279.598 619.869 279.814 619.37 280.024C618.947 280.204 618.522 280.381 618.096 280.551C617.583 280.754 617.067 280.95 616.548 281.142C616.372 281.208 616.193 281.273 616.016 281.339C615.768 281.428 615.52 281.517 615.269 281.604C614.731 281.792 614.188 281.967 613.643 282.14C613.223 282.272 612.804 282.409 612.381 282.535C612.049 282.632 611.717 282.725 611.382 282.817C611.132 282.885 610.882 282.953 610.632 283.018C610.233 283.125 609.837 283.238 609.434 283.336C608.776 283.5 608.108 283.642 607.442 283.785C607.103 283.859 606.768 283.94 606.426 284.008C606.065 284.081 605.7 284.15 605.335 284.217Z" fill="url(#paint59_radial_44_2485)"/>
                <path id="path436_13" d="M600.978 284.827C600.428 284.927 599.874 285.021 599.319 285.108C599.192 285.129 599.062 285.15 598.934 285.169C598.866 285.179 598.802 285.188 598.734 285.198C574.51 288.784 551.639 278.639 538.675 260.976C533.743 254.256 530.244 246.449 528.649 237.895C528.644 237.867 528.638 237.839 528.633 237.811C528.632 237.804 528.63 237.797 528.629 237.787C528.625 237.766 528.621 237.745 528.617 237.724C528.616 237.717 528.615 237.71 528.613 237.703C528.609 237.679 528.604 237.653 528.6 237.63C528.599 237.625 528.599 237.623 528.598 237.618C527.065 229.16 527.53 220.72 529.687 212.775C530.759 208.828 532.248 205.003 534.118 201.357C540.965 214.105 548.034 219.604 553.965 222.072C555.339 222.644 556.678 223.064 557.986 223.362L559.842 223.696L561.627 224.007L563.295 224.157L564.079 224.196L565.448 224.128L566.7 223.899C568.096 223.761 569.449 223.451 570.791 223.206C571.744 223.032 572.684 222.843 573.615 222.656C574.547 222.468 575.468 222.283 576.383 222.116C579.402 221.564 582.34 221.214 585.279 221.674L588.181 222.431L589.481 222.921L591.921 224.323C592.242 224.539 592.561 224.769 592.883 225.014C605.111 234.346 600.521 251.853 611.284 267.92C613.514 271.247 616.515 274.69 620.681 277.857C614.688 281.14 608.065 283.531 600.978 284.827Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_14" d="M600.966 284.717C600.411 284.818 599.858 284.912 599.298 285C599.854 284.913 600.407 284.819 600.958 284.718C608.044 283.423 614.668 281.032 620.661 277.749C616.495 274.582 613.493 271.139 611.264 267.812C600.501 251.745 605.091 234.237 592.863 224.906C592.541 224.661 592.222 224.431 591.901 224.215L589.365 222.76L588.348 222.4L585.259 221.566C582.32 221.105 579.382 221.456 576.362 222.008C575.448 222.175 574.527 222.36 573.595 222.547C572.664 222.735 571.723 222.924 570.77 223.098C569.428 223.343 568.062 223.559 566.666 223.698L565.16 223.973L561.794 223.976L557.966 223.253C556.658 222.956 555.318 222.535 553.944 221.964C548.013 219.496 540.944 213.997 534.097 201.249C540.241 189.267 550.494 179.225 563.52 173.171C567.796 171.185 572.368 169.63 577.194 168.576C577.933 168.414 578.677 168.263 579.416 168.128C579.432 168.125 579.447 168.123 579.463 168.12C613.068 161.976 645.634 182.486 651.709 215.066C657.787 247.66 634.753 278.446 601.146 284.684C601.085 284.695 601.026 284.706 600.966 284.717ZM528.613 237.702C528.612 237.695 528.61 237.686 528.608 237.679C528.61 237.688 528.612 237.695 528.613 237.702Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="VueJS" d="M564.172 217.607C564.078 217.593 563.925 217.591 563.837 217.607C563.483 217.672 563.148 218.007 563.091 218.353L559.307 237.831L548.749 220.975C548.541 220.678 548.113 220.512 547.788 220.571C547.257 220.668 546.921 221.157 547.014 221.658C547.031 221.747 547.088 221.889 547.134 221.972L558.985 240.848C559.163 241.151 559.596 241.346 559.951 241.282C560.275 241.222 560.609 240.887 560.696 240.535L564.929 218.719C564.942 218.625 564.944 218.472 564.922 218.354C564.862 218.03 564.525 217.695 564.172 217.607ZM583.191 223.645C582.69 223.737 582.353 224.225 582.447 224.726L583.431 230.006C583.948 232.778 582.123 235.429 579.349 235.936C576.605 236.438 573.944 234.607 573.427 231.834L572.443 226.555C572.349 226.054 571.859 225.717 571.357 225.808C570.856 225.9 570.519 226.388 570.613 226.89L571.597 232.169C572.301 235.944 575.942 238.45 579.69 237.765C581.254 237.479 583.273 236.195 584.156 234.875C585.074 233.578 585.558 231.264 585.266 229.701C585.266 229.701 585.266 229.701 585.261 229.671L584.277 224.392C584.183 223.891 583.693 223.553 583.191 223.645ZM597.503 231.489C596.899 232.179 595.659 232.894 594.744 233.061C592.177 233.53 589.691 231.819 589.212 229.254C588.734 226.688 590.439 224.211 593.006 223.742C593.597 223.634 594.55 223.673 595.131 223.841L590.945 229.547C590.772 229.761 590.709 230.078 590.753 230.314C590.846 230.815 591.307 231.158 591.838 231.061C592.045 231.023 592.318 230.851 592.432 230.647L597.325 223.989C597.474 223.809 597.537 223.493 597.499 223.286C597.455 223.05 597.247 222.753 597.042 222.638C595.885 221.995 593.934 221.681 592.665 221.913C589.095 222.566 586.717 226.02 587.383 229.588C588.054 233.186 591.514 235.542 595.085 234.889C596.354 234.657 598.063 233.674 598.917 232.694C599.097 232.509 599.213 232.152 599.164 231.887C599.07 231.386 598.58 231.048 598.078 231.14C597.872 231.178 597.623 231.315 597.503 231.489ZM604.285 232.079C605.433 232.51 607.351 232.647 608.59 232.421C613.106 231.595 616.083 227.269 615.242 222.757L612.784 209.574C612.69 209.073 612.2 208.735 611.698 208.827C611.167 208.924 610.831 209.413 610.924 209.914L613.382 223.097C614.031 226.577 611.732 229.955 608.249 230.592C606.237 230.929 603.559 229.986 602.212 228.493C602.015 228.255 601.628 228.143 601.333 228.197C600.832 228.288 600.495 228.777 600.589 229.278C600.616 229.426 600.714 229.621 600.795 229.729C601.602 230.618 603.142 231.678 604.285 232.079ZM621.763 208.939C624.065 208.518 626.271 210.036 626.7 212.337C626.793 212.838 627.283 213.175 627.785 213.084C628.287 212.992 628.623 212.504 628.53 212.002C627.914 208.699 624.728 206.506 621.423 207.111C618.117 207.715 615.903 210.895 616.519 214.198C617.134 217.501 620.355 219.718 623.661 219.114C625.962 218.693 628.168 220.211 628.597 222.511C629.026 224.812 627.513 227.01 625.211 227.43C622.909 227.851 620.704 226.333 620.275 224.033C620.181 223.531 619.691 223.194 619.19 223.286C618.658 223.383 618.322 223.871 618.416 224.373C619.032 227.676 622.247 229.863 625.552 229.259C628.858 228.655 631.043 225.48 630.427 222.177C629.811 218.874 626.619 216.651 623.314 217.256C621.012 217.676 618.807 216.158 618.378 213.858C617.949 211.558 619.462 209.36 621.763 208.939Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="jquery"  onMouseOver={() => changeHoverID(6)} >
                <path id="path316_15" d="M460.413 327.205C459.761 327.325 459.104 327.435 458.444 327.534L458.441 327.534C457.691 327.65 456.94 327.748 456.192 327.836C489.799 321.598 512.832 290.813 506.755 258.218C500.68 225.638 468.114 205.129 434.509 211.272C434.492 211.275 434.478 211.278 434.462 211.281C435.191 211.096 435.927 210.92 436.667 210.758C437.433 210.592 438.192 210.441 438.956 210.301C445.465 209.111 451.939 208.914 458.189 209.604C462.984 210.136 467.649 211.191 472.099 212.721C472.901 212.997 473.699 213.288 474.486 213.596C480.328 215.866 485.758 218.972 490.586 222.8C492.307 224.168 493.953 225.627 495.515 227.172C498.686 230.317 501.503 233.82 503.887 237.641C504.843 239.173 505.73 240.759 506.543 242.39C508.292 245.907 509.694 249.647 510.704 253.58C511.019 254.812 511.296 256.065 511.533 257.335C511.626 257.835 511.712 258.332 511.791 258.83C512.426 262.819 512.628 266.779 512.426 270.667C512.335 272.463 512.155 274.242 511.894 276.004C511.25 280.353 510.103 284.584 508.505 288.632C507.752 290.542 506.898 292.41 505.949 294.232C503.301 299.315 499.912 304.03 495.898 308.234C492.743 311.537 489.202 314.523 485.331 317.122C483.707 318.212 482.024 319.236 480.286 320.188L480.299 320.198C480.247 320.226 480.194 320.253 480.14 320.28C480.043 320.329 479.944 320.379 479.848 320.431C479.444 320.648 479.034 320.856 478.626 321.064C478.149 321.307 477.671 321.547 477.187 321.779C476.773 321.978 476.353 322.172 475.931 322.363C475.441 322.586 474.947 322.803 474.447 323.013C474.025 323.192 473.6 323.369 473.174 323.54C472.661 323.743 472.145 323.939 471.626 324.131C471.45 324.197 471.271 324.261 471.094 324.328C470.846 324.417 470.598 324.506 470.347 324.593C469.809 324.781 469.266 324.956 468.721 325.128C468.301 325.261 467.882 325.398 467.459 325.524C467.127 325.621 466.795 325.713 466.46 325.806C466.21 325.874 465.96 325.941 465.71 326.006C465.311 326.113 464.915 326.227 464.512 326.325C463.854 326.489 463.186 326.631 462.519 326.774C462.181 326.848 461.846 326.929 461.504 326.996C461.143 327.07 460.778 327.139 460.413 327.205Z" fill="url(#paint60_radial_44_2485)"/>
                <path id="path436_14" d="M456.056 327.815C455.505 327.915 454.952 328.009 454.396 328.096C454.269 328.117 454.139 328.138 454.012 328.157C453.944 328.167 453.88 328.176 453.812 328.186C429.588 331.772 406.717 321.628 393.752 303.964C388.82 297.244 385.322 289.437 383.727 280.883C383.721 280.855 383.716 280.827 383.711 280.799C383.71 280.792 383.708 280.785 383.706 280.775C383.703 280.754 383.699 280.733 383.695 280.712C383.694 280.705 383.692 280.698 383.691 280.691C383.687 280.667 383.682 280.642 383.678 280.618C383.677 280.613 383.677 280.611 383.676 280.606C382.142 272.148 382.607 263.709 384.765 255.763C385.836 251.816 387.326 247.991 389.195 244.345C396.042 257.093 403.111 262.592 409.043 265.06C410.416 265.632 411.756 266.052 413.064 266.35L414.92 266.684L416.704 266.995L418.373 267.146L419.157 267.185L420.526 267.116L421.778 266.888C423.174 266.749 424.526 266.44 425.868 266.194C426.821 266.02 427.762 265.831 428.693 265.644C429.625 265.457 430.546 265.271 431.46 265.104C434.48 264.552 437.418 264.202 440.357 264.663L443.259 265.419L444.559 265.91L446.999 267.311C447.32 267.527 447.639 267.758 447.961 268.002C460.189 277.334 455.599 294.841 466.362 310.909C468.591 314.235 471.593 317.678 475.759 320.845C469.766 324.128 463.142 326.519 456.056 327.815Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_15" d="M456.043 327.705C455.489 327.807 454.936 327.9 454.376 327.988C454.932 327.901 455.485 327.807 456.035 327.707C463.122 326.411 469.746 324.02 475.739 320.737C471.573 317.57 468.571 314.127 466.342 310.801C455.579 294.733 460.169 277.226 447.941 267.894C447.619 267.65 447.3 267.419 446.979 267.203L444.443 265.749L443.426 265.388L440.337 264.555C437.398 264.094 434.46 264.444 431.44 264.996C430.526 265.163 429.605 265.349 428.673 265.536C427.742 265.723 426.801 265.912 425.848 266.086C424.506 266.332 423.14 266.547 421.744 266.686L420.238 266.961L416.871 266.965L413.044 266.242C411.736 265.944 410.396 265.524 409.022 264.952C403.091 262.484 396.022 256.985 389.175 244.237C395.319 232.256 405.572 222.214 418.598 216.159C422.874 214.173 427.446 212.619 432.272 211.564C433.011 211.402 433.755 211.252 434.494 211.117C434.51 211.114 434.524 211.111 434.541 211.108C468.146 204.965 500.712 225.474 506.787 258.055C512.865 290.649 489.831 321.434 456.224 327.672C456.163 327.683 456.104 327.694 456.043 327.705ZM383.691 280.691C383.689 280.684 383.688 280.674 383.686 280.667C383.688 280.677 383.689 280.684 383.691 280.691Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="jQuery" d="M407.501 291.685C411.131 291.021 413.532 287.533 412.85 283.876L410.783 272.787C410.689 272.285 410.199 271.948 409.697 272.04C409.196 272.131 408.86 272.62 408.953 273.121L411.021 284.21C411.51 286.835 409.787 289.376 407.16 289.856C404.534 290.336 401.978 288.577 401.489 285.953C401.395 285.451 400.905 285.114 400.403 285.206C399.902 285.297 399.565 285.786 399.659 286.287C400.341 289.944 403.842 292.354 407.501 291.685ZM409.626 271.656C410.157 271.559 410.493 271.071 410.394 270.54C410.301 270.039 409.805 269.672 409.274 269.769C408.772 269.861 408.412 270.384 408.506 270.885C408.605 271.416 409.124 271.748 409.626 271.656ZM434.022 276.712C435.119 274.742 435.706 271.341 435.288 269.1C434.144 262.966 428.262 258.917 422.154 260.034C418.081 260.779 414.073 264.652 413.202 268.654C412.915 269.896 412.894 271.913 413.125 273.151C414.263 279.256 420.145 283.304 426.283 282.182C428.526 281.772 431.493 280.01 432.936 278.252L435.842 280.252C436.017 280.373 436.334 280.437 436.54 280.399C437.042 280.307 437.378 279.819 437.285 279.317C437.246 279.111 437.073 278.838 436.898 278.717L434.022 276.712ZM423.446 270.563C423.326 270.738 423.233 271.06 423.277 271.296C423.315 271.502 423.518 271.77 423.693 271.89L431.395 277.192C430.193 278.601 427.737 279.995 425.937 280.324C420.832 281.258 415.93 277.884 414.984 272.812C414.033 267.709 417.395 262.825 422.5 261.892C427.576 260.964 432.507 264.332 433.458 269.434C433.764 271.239 433.339 274.031 432.446 275.627L424.744 270.326C424.569 270.206 424.252 270.141 424.045 270.179C423.839 270.217 423.566 270.389 423.446 270.563ZM451.324 264.247C450.823 264.339 450.486 264.827 450.58 265.329L451.564 270.608C452.081 273.38 450.256 276.031 447.482 276.538C444.738 277.04 442.077 275.209 441.56 272.436L440.576 267.157C440.482 266.656 439.992 266.319 439.49 266.41C438.989 266.502 438.652 266.991 438.746 267.492L439.73 272.771C440.434 276.546 444.075 279.052 447.823 278.367C449.387 278.081 451.406 276.797 452.289 275.477C453.207 274.18 453.691 271.866 453.399 270.303C453.399 270.303 453.399 270.303 453.394 270.273L452.41 264.994C452.316 264.493 451.826 264.155 451.324 264.247ZM465.636 272.091C465.032 272.781 463.792 273.496 462.877 273.663C460.31 274.132 457.824 272.421 457.345 269.856C456.867 267.29 458.572 264.813 461.139 264.344C461.73 264.236 462.683 264.275 463.264 264.443L459.079 270.149C458.905 270.364 458.842 270.68 458.886 270.916C458.979 271.417 459.44 271.76 459.971 271.663C460.178 271.625 460.451 271.453 460.565 271.249L465.458 264.591C465.607 264.411 465.67 264.095 465.632 263.888C465.588 263.652 465.38 263.355 465.175 263.24C464.018 262.598 462.067 262.283 460.798 262.515C457.228 263.168 454.85 266.622 455.516 270.19C456.187 273.788 459.647 276.144 463.218 275.492C464.487 275.26 466.196 274.276 467.051 273.297C467.23 273.111 467.346 272.755 467.297 272.489C467.203 271.988 466.713 271.65 466.211 271.742C466.005 271.78 465.756 271.917 465.636 272.091ZM473.719 260.184C470.06 260.853 467.635 264.376 468.316 268.033L469.345 273.548C469.444 274.079 469.934 274.416 470.436 274.325C470.967 274.227 471.303 273.739 471.204 273.208L470.176 267.693C469.681 265.039 471.41 262.527 474.066 262.042C474.567 261.95 474.903 261.462 474.804 260.931C474.711 260.429 474.221 260.092 473.719 260.184ZM489.866 257.415C489.731 257.348 489.484 257.332 489.337 257.359C489.071 257.408 488.75 257.649 488.646 257.912L484.011 269.22L478.828 259.921C478.65 259.618 478.217 259.422 477.863 259.487C477.361 259.579 477.025 260.067 477.118 260.569C477.135 260.657 477.186 260.77 477.197 260.829L483.105 271.399L480.86 276.871C480.793 277.006 480.778 277.252 480.806 277.4C480.905 277.931 481.395 278.268 481.897 278.176C482.192 278.122 482.478 277.857 482.605 277.559L490.398 258.629C490.435 258.5 490.45 258.254 490.422 258.106C490.373 257.841 490.13 257.519 489.866 257.415Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="react"  onMouseOver={() => changeHoverID(9)} >
                <path id="path316_16" d="M668.27 141.816C667.618 141.935 666.962 142.046 666.301 142.145L666.299 142.145C665.548 142.26 664.798 142.359 664.049 142.447C697.656 136.209 720.69 105.424 714.612 72.8293C708.537 40.249 675.972 19.7395 642.367 25.8827C642.35 25.8858 642.336 25.8884 642.319 25.8914C643.048 25.7071 643.784 25.5313 644.525 25.3692C645.29 25.2026 646.05 25.0517 646.813 24.9121C653.323 23.7221 659.796 23.5245 666.046 24.2151C670.841 24.7467 675.507 25.8022 679.956 27.3318C680.758 27.6077 681.556 27.8988 682.343 28.2066C688.186 30.477 693.615 33.5829 698.443 37.4107C700.165 38.7786 701.811 40.2379 703.372 41.7832C706.544 44.928 709.361 48.4313 711.745 52.2518C712.7 53.784 713.588 55.37 714.401 57.0011C716.15 60.5175 717.552 64.2577 718.561 68.191C718.876 69.4227 719.153 70.6759 719.39 71.9461C719.484 72.4462 719.569 72.9429 719.648 73.4407C720.284 77.4303 720.486 81.3898 720.283 85.2777C720.192 87.074 720.013 88.8526 719.752 90.6144C719.108 94.9641 717.961 99.1946 716.363 103.243C715.609 105.153 714.756 107.021 713.806 108.843C711.158 113.926 707.769 118.641 703.756 122.844C700.601 126.148 697.06 129.133 693.189 131.732C691.564 132.823 689.881 133.847 688.143 134.799L688.157 134.808C688.105 134.837 688.052 134.864 687.997 134.891C687.9 134.94 687.801 134.99 687.705 135.041C687.301 135.258 686.891 135.467 686.484 135.675C686.006 135.918 685.528 136.158 685.044 136.39C684.63 136.589 684.211 136.783 683.788 136.974C683.298 137.197 682.804 137.414 682.305 137.624C681.882 137.803 681.457 137.98 681.031 138.15C680.519 138.353 680.003 138.55 679.484 138.742C679.307 138.808 679.128 138.872 678.952 138.938C678.704 139.028 678.456 139.117 678.205 139.204C677.667 139.392 677.124 139.566 676.578 139.739C676.158 139.872 675.74 140.009 675.317 140.135C674.985 140.232 674.652 140.324 674.317 140.417C674.067 140.485 673.817 140.552 673.567 140.617C673.168 140.724 672.773 140.838 672.37 140.936C671.712 141.1 671.043 141.241 670.377 141.385C670.038 141.459 669.704 141.54 669.362 141.607C669 141.68 668.635 141.749 668.27 141.816Z" fill="url(#paint61_radial_44_2485)"/>
                <path id="path436_15" d="M663.913 142.426C663.363 142.526 662.81 142.62 662.254 142.707C662.127 142.728 661.997 142.749 661.869 142.768C661.802 142.778 661.737 142.787 661.67 142.797C637.445 146.383 614.574 136.239 601.61 118.575C596.678 111.855 593.179 104.048 591.584 95.4943C591.579 95.4662 591.574 95.438 591.568 95.4098C591.567 95.4028 591.566 95.3957 591.564 95.3863C591.56 95.3652 591.556 95.344 591.552 95.3229C591.551 95.3158 591.55 95.3088 591.548 95.3017C591.544 95.2782 591.539 95.2524 591.535 95.2289C591.534 95.2242 591.534 95.2218 591.533 95.2171C590 86.7591 590.465 78.3193 592.622 70.3739C593.694 66.4268 595.183 62.6023 597.053 58.956C603.9 71.7042 610.969 77.203 616.9 79.671C618.274 80.2429 619.613 80.6633 620.921 80.9607L622.777 81.2952L624.562 81.6063L626.23 81.7566L627.014 81.7954L628.383 81.7273L629.635 81.4984C631.031 81.3597 632.384 81.0505 633.726 80.8052C634.679 80.631 635.62 80.442 636.551 80.2548C637.482 80.0675 638.403 79.8821 639.318 79.715C642.337 79.163 645.276 78.8128 648.214 79.2735L651.116 80.0298L652.416 80.5206L654.857 81.9222C655.177 82.138 655.496 82.3685 655.818 82.6132C668.047 91.9447 663.456 109.452 674.22 125.52C676.449 128.846 679.451 132.289 683.616 135.456C677.624 138.739 671 141.13 663.913 142.426Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_16" d="M663.901 142.316C663.347 142.417 662.794 142.511 662.234 142.599C662.789 142.512 663.343 142.418 663.893 142.317C670.98 141.022 677.604 138.631 683.596 135.348C679.43 132.181 676.429 128.738 674.199 125.411C663.436 109.344 668.026 91.8365 655.798 82.505C655.476 82.2603 655.157 82.0298 654.836 81.814L652.3 80.3596L651.283 79.9992L648.194 79.1653C645.255 78.7046 642.317 79.0549 639.298 79.6068C638.383 79.774 637.462 79.9593 636.53 80.1467C635.599 80.3339 634.659 80.5228 633.706 80.697C632.364 80.9423 630.997 81.1581 629.602 81.2968L628.095 81.5721L624.729 81.5757L620.901 80.8525C619.593 80.5551 618.254 80.1347 616.88 79.5628C610.949 77.0949 603.88 71.596 597.033 58.8479C603.177 46.8667 613.43 36.8247 626.456 30.7699C630.731 28.784 635.303 27.2295 640.129 26.1749C640.868 26.0131 641.613 25.8625 642.351 25.7275C642.368 25.7244 642.382 25.7218 642.399 25.7188C676.004 19.5756 708.57 40.085 714.644 72.6653C720.722 105.26 697.688 136.045 664.081 142.283C664.021 142.294 663.962 142.305 663.901 142.316ZM591.548 95.3016C591.547 95.2946 591.545 95.2852 591.544 95.2782C591.546 95.2875 591.547 95.2946 591.548 95.3016Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="React" d="M631.447 84.1415C631.041 81.9591 629.211 79.1829 627.39 77.9299C625.57 76.6769 622.358 75.9831 620.174 76.3823L620.145 76.3877C619.643 76.4794 619.307 76.9678 619.4 77.4692L623.211 97.9069C623.305 98.4083 623.795 98.7456 624.297 98.6539C624.798 98.5622 625.134 98.0738 625.041 97.5724L624.7 95.744L631.132 97.3434C631.226 97.3567 631.409 97.3538 631.527 97.3322C632.028 97.2405 632.365 96.7521 632.271 96.2507C632.211 95.9263 631.903 95.5861 631.58 95.4926L626.721 94.3071C627.8 93.7134 629.207 92.4193 629.903 91.4076C631.152 89.5935 631.86 86.3534 631.453 84.171C631.453 84.171 631.453 84.171 631.447 84.1415ZM621.412 78.1079C625.336 77.8785 628.868 80.618 629.588 84.4814C630.314 88.3743 628.003 92.1819 624.255 93.3551L621.412 78.1079ZM645.942 91.7388C645.338 92.4287 644.098 93.1433 643.183 93.3105C640.616 93.7799 638.13 92.069 637.652 89.5032C637.173 86.9374 638.878 84.4605 641.445 83.9911C642.036 83.8833 642.989 83.9225 643.57 84.0908L639.385 89.7963C639.211 90.011 639.148 90.3275 639.192 90.5635C639.285 91.0648 639.746 91.4076 640.277 91.3105C640.484 91.2727 640.757 91.1008 640.872 90.8969L645.764 84.2386C645.914 84.0588 645.977 83.7423 645.938 83.5358C645.894 83.2999 645.686 83.0025 645.481 82.8874C644.324 82.245 642.373 81.9307 641.104 82.1627C637.534 82.8154 635.156 86.2692 635.822 89.8377C636.493 93.4357 639.953 95.7918 643.524 95.139C644.793 94.907 646.502 93.9237 647.357 92.944C647.536 92.7588 647.652 92.402 647.603 92.1366C647.509 91.6353 647.019 91.2979 646.517 91.3896C646.311 91.4274 646.062 91.5644 645.942 91.7388ZM656.273 92.8694C657.159 92.7075 658.485 92.1296 659.199 91.5415C659.437 91.3455 659.578 90.9539 659.523 90.659C659.43 90.1576 658.939 89.8202 658.438 89.9119C658.32 89.9335 658.154 90.0249 658.047 90.1054C657.511 90.5083 656.581 90.9222 655.932 91.0409C653.335 91.5156 650.85 89.8048 650.366 87.2095C649.887 84.6437 651.587 82.1373 654.184 81.6625C656.751 81.1932 659.266 82.8987 659.75 85.4939L660.795 91.0974C660.888 91.5987 661.379 91.9361 661.88 91.8444C662.382 91.7527 662.718 91.2643 662.625 90.7629L661.58 85.1595C660.909 81.5615 657.443 79.1759 653.843 79.8341C652.338 80.1092 650.431 81.3421 649.567 82.598C648.732 83.8485 648.261 86.0694 648.536 87.544C649.207 91.142 652.673 93.5276 656.273 92.8694ZM669.006 79.014C669.92 78.8467 671.301 79.0517 672.12 79.5121C672.289 79.6031 672.571 79.643 672.748 79.6106C673.25 79.5189 673.557 79.0359 673.463 78.5346C673.419 78.2986 673.211 78.0012 673.007 77.8861C671.884 77.2678 669.934 76.9535 668.665 77.1855C665.123 77.8329 662.77 81.2517 663.43 84.7907C664.095 88.3592 667.521 90.6912 671.062 90.0439C672.331 89.8119 674.04 88.8286 674.865 87.8543C675.015 87.6745 675.107 87.3526 675.063 87.1166C674.97 86.6153 674.509 86.2725 674.008 86.3642C673.831 86.3966 673.581 86.5336 673.456 86.6786C672.852 87.3684 671.642 88.0776 670.727 88.2449C668.189 88.7088 665.738 87.022 665.26 84.4563C664.787 81.92 666.468 79.4779 669.006 79.014ZM681.769 75.6744C682.271 75.5827 682.607 75.0942 682.513 74.5929C682.42 74.0915 681.93 73.7542 681.428 73.8459L676.647 74.7198L675.278 67.3764C675.184 66.875 674.694 66.5377 674.193 66.6294C673.691 66.7211 673.355 67.2095 673.448 67.7109L676.159 82.2503C676.836 85.8778 680.337 88.2875 683.966 87.6239L683.996 87.6185C684.498 87.5268 684.839 87.0679 684.74 86.537C684.647 86.0357 684.157 85.6983 683.655 85.79C681.029 86.2702 678.478 84.5406 677.989 81.9158L676.988 76.5483L681.769 75.6744Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="JS"  onMouseOver={() => changeHoverID(7)} >
                <path id="path316_17" d="M498.542 178.885C497.789 179.023 497.032 179.15 496.269 179.264L496.267 179.264C495.401 179.397 494.535 179.51 493.671 179.611C532.448 172.412 558.964 136.561 551.873 98.5344C544.786 60.5241 507.149 36.5313 468.374 43.6196C468.354 43.6231 468.338 43.6261 468.319 43.6296C469.16 43.4163 470.009 43.2129 470.864 43.0256C471.747 42.833 472.623 42.6587 473.504 42.4976C481.015 41.1246 488.487 40.9087 495.702 41.7283C501.239 42.3592 506.626 43.6008 511.766 45.3947C512.692 45.7183 513.614 46.0597 514.523 46.4203C521.272 49.0815 527.546 52.716 533.128 57.1911C535.118 58.7903 537.022 60.4959 538.827 62.3017C542.495 65.9764 545.755 70.0685 548.516 74.5295C549.622 76.3186 550.65 78.1703 551.592 80.0744C553.619 84.1794 555.246 88.5446 556.421 93.1341C556.787 94.5712 557.11 96.0333 557.386 97.5153C557.495 98.0987 557.595 98.6781 557.687 99.2589C558.43 103.913 558.673 108.531 558.448 113.065C558.347 115.16 558.144 117.234 557.847 119.288C557.114 124.359 555.799 129.29 553.964 134.008C553.099 136.234 552.118 138.41 551.026 140.533C547.981 146.455 544.081 151.947 539.457 156.84C535.823 160.685 531.743 164.159 527.281 167.181C525.408 168.45 523.468 169.64 521.464 170.746L521.48 170.757C521.42 170.791 521.359 170.822 521.296 170.853C521.184 170.91 521.07 170.968 520.959 171.028C520.493 171.28 520.021 171.522 519.55 171.764C519 172.046 518.449 172.325 517.891 172.594C517.414 172.826 516.929 173.051 516.442 173.273C515.877 173.532 515.308 173.783 514.732 174.027C514.244 174.235 513.754 174.441 513.262 174.639C512.671 174.874 512.076 175.102 511.478 175.325C511.274 175.402 511.068 175.476 510.864 175.553C510.578 175.656 510.292 175.76 510.003 175.861C509.382 176.079 508.755 176.281 508.126 176.481C507.642 176.635 507.159 176.794 506.671 176.94C506.288 177.052 505.904 177.159 505.518 177.267C505.23 177.345 504.942 177.423 504.653 177.499C504.192 177.622 503.736 177.754 503.271 177.867C502.512 178.057 501.741 178.221 500.972 178.387C500.582 178.472 500.195 178.566 499.801 178.643C499.384 178.728 498.963 178.808 498.542 178.885Z" fill="url(#paint62_radial_44_2485)"/>
                <path id="path436_16" d="M493.513 179.586C492.879 179.702 492.24 179.81 491.599 179.91C491.452 179.934 491.302 179.959 491.155 179.98C491.077 179.991 491.003 180.002 490.925 180.014C462.972 184.141 436.549 172.258 421.544 151.629C415.835 143.781 411.779 134.668 409.918 124.688C409.912 124.656 409.906 124.623 409.9 124.59C409.898 124.582 409.896 124.573 409.894 124.562C409.89 124.538 409.885 124.513 409.881 124.488C409.879 124.48 409.878 124.472 409.876 124.464C409.871 124.436 409.866 124.406 409.861 124.379C409.86 124.373 409.859 124.371 409.858 124.365C408.069 114.497 408.586 104.656 411.058 95.3943C412.286 90.7934 413.996 86.3365 416.146 82.0883C424.079 96.9713 432.251 103.4 439.103 106.292C440.69 106.962 442.237 107.455 443.747 107.805L445.891 108.2L447.951 108.566L449.877 108.745L450.782 108.792L452.362 108.716L453.807 108.452C455.418 108.293 456.978 107.936 458.527 107.653C459.626 107.452 460.712 107.234 461.786 107.017C462.861 106.801 463.924 106.587 464.979 106.394C468.463 105.757 471.854 105.355 475.247 105.899L478.598 106.788L480.1 107.363L482.92 109.003C483.291 109.256 483.66 109.525 484.032 109.811C498.168 120.722 492.91 141.129 505.371 159.893C507.952 163.777 511.425 167.799 516.24 171.502C509.331 175.318 501.69 178.091 493.513 179.586Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_17" d="M493.499 179.458C492.86 179.575 492.222 179.683 491.576 179.784C492.217 179.684 492.855 179.576 493.49 179.46C501.667 177.965 509.307 175.192 516.217 171.376C511.401 167.673 507.928 163.651 505.347 159.767C492.887 141.003 498.145 120.596 484.008 109.685C483.636 109.399 483.267 109.13 482.897 108.877L479.965 107.176L478.791 106.753L475.223 105.773C471.83 105.229 468.439 105.631 464.956 106.268C463.9 106.461 462.838 106.675 461.763 106.891C460.689 107.108 459.603 107.326 458.504 107.527C456.955 107.81 455.378 108.058 453.768 108.217L452.029 108.535L448.144 108.531L443.724 107.679C442.213 107.329 440.666 106.836 439.079 106.166C432.227 103.274 424.055 96.8453 416.122 81.9623C423.187 68.0033 434.998 56.3151 450.019 49.2832C454.95 46.9769 460.224 45.1744 465.792 43.9553C466.645 43.7683 467.503 43.5943 468.355 43.4386C468.375 43.435 468.391 43.4321 468.41 43.4285C507.185 36.3402 544.823 60.333 551.91 98.3434C559 136.37 532.484 172.221 493.708 179.42C493.638 179.433 493.569 179.445 493.499 179.458ZM409.876 124.464C409.875 124.456 409.873 124.445 409.871 124.436C409.873 124.447 409.875 124.456 409.876 124.464Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="JS_2" d="M461.893 130.593C463.807 131.31 467.003 131.539 469.068 131.161C476.594 129.786 481.556 122.576 480.154 115.056L476.057 93.0842C475.901 92.2486 475.084 91.6864 474.248 91.8392C473.363 92.0011 472.803 92.8151 472.958 93.6507L477.055 115.622C478.137 121.422 474.304 127.053 468.5 128.114C465.146 128.676 460.682 127.103 458.439 124.616C458.11 124.219 457.465 124.032 456.973 124.122C456.137 124.275 455.577 125.089 455.733 125.924C455.778 126.17 455.941 126.496 456.076 126.675C457.42 128.157 459.988 129.924 461.893 130.593ZM491.024 92.0256C494.86 91.3243 498.536 93.8544 499.251 97.6884C499.407 98.524 500.224 99.0862 501.06 98.9334C501.896 98.7805 502.456 97.9665 502.3 97.1309C501.274 91.6258 495.964 87.9711 490.455 88.9781C484.947 89.9851 481.256 95.2853 482.282 100.79C483.309 106.295 488.677 109.99 494.186 108.983C498.022 108.282 501.698 110.812 502.413 114.646C503.128 118.48 500.606 122.143 496.77 122.844C492.934 123.546 489.258 121.016 488.543 117.182C488.387 116.346 487.57 115.784 486.734 115.937C485.849 116.098 485.288 116.913 485.444 117.748C486.471 123.253 491.83 126.899 497.338 125.892C502.847 124.885 506.489 119.594 505.462 114.089C504.436 108.584 499.117 104.88 493.608 105.887C489.772 106.588 486.096 104.058 485.381 100.224C484.666 96.39 487.187 92.7269 491.024 92.0256Z" fill="white" fillOpacity="0.5"/>
                </g>
                </g>
                <g id="Group 28">
                <g id="php_2"  onMouseOver={() => changeHoverID(17)} >
                <path id="path316_18" d="M1241.92 521.812C1241.25 521.812 1240.59 521.803 1239.92 521.781H1239.92C1239.16 521.76 1238.4 521.722 1237.65 521.674C1271.84 521.581 1300.14 495.448 1300.14 462.303C1300.14 429.172 1271.88 403.149 1237.7 403.149C1237.69 403.149 1237.67 403.149 1237.65 403.149C1238.41 403.099 1239.16 403.058 1239.92 403.032C1240.7 403.006 1241.48 402.994 1242.25 402.994C1248.87 402.994 1255.27 403.963 1261.29 405.766C1265.91 407.151 1270.31 409.027 1274.4 411.331C1275.14 411.747 1275.87 412.177 1276.59 412.621C1281.92 415.904 1286.69 419.934 1290.73 424.566C1292.18 426.221 1293.53 427.952 1294.78 429.752C1297.32 433.415 1299.45 437.366 1301.09 441.552C1301.75 443.23 1302.33 444.949 1302.83 446.699C1303.91 450.472 1304.6 454.402 1304.87 458.451C1304.96 459.719 1305 461.001 1305 462.293C1305 462.802 1304.99 463.306 1304.98 463.809C1304.87 467.847 1304.35 471.777 1303.43 475.564C1303.01 477.314 1302.51 479.031 1301.93 480.716C1300.5 484.878 1298.6 488.832 1296.28 492.525C1295.19 494.268 1294.01 495.952 1292.74 497.573C1289.21 502.095 1285.01 506.123 1280.29 509.535C1276.58 512.216 1272.55 514.516 1268.27 516.376C1266.47 517.156 1264.63 517.861 1262.75 518.484L1262.76 518.496C1262.7 518.515 1262.65 518.532 1262.59 518.548C1262.48 518.579 1262.38 518.61 1262.27 518.644C1261.84 518.785 1261.39 518.916 1260.95 519.047C1260.44 519.2 1259.93 519.351 1259.41 519.491C1258.96 519.613 1258.52 519.728 1258.07 519.84C1257.54 519.971 1257.02 520.096 1256.49 520.213C1256.04 520.313 1255.59 520.411 1255.14 520.501C1254.6 520.609 1254.05 520.709 1253.51 520.805C1253.32 520.838 1253.14 520.869 1252.95 520.903C1252.69 520.946 1252.43 520.989 1252.17 521.029C1251.6 521.117 1251.04 521.191 1250.47 521.263C1250.03 521.318 1249.59 521.378 1249.16 521.425C1248.81 521.461 1248.47 521.492 1248.12 521.523C1247.86 521.545 1247.6 521.566 1247.35 521.585C1246.93 521.619 1246.53 521.659 1246.11 521.683C1245.43 521.726 1244.75 521.745 1244.07 521.767C1243.72 521.779 1243.38 521.798 1243.03 521.803C1242.66 521.81 1242.29 521.812 1241.92 521.812Z" fill="url(#paint63_radial_44_2485)"/>
                <path id="path436_17" d="M1237.52 521.628C1236.96 521.628 1236.4 521.621 1235.84 521.607C1235.71 521.605 1235.58 521.602 1235.45 521.597C1235.38 521.595 1235.32 521.593 1235.25 521.59C1210.77 520.762 1190.14 506.675 1180.63 486.974C1177.01 479.479 1175 471.173 1175 462.475C1175 462.446 1175 462.417 1175 462.389C1175 462.382 1175 462.374 1175 462.365C1175 462.343 1175 462.322 1175 462.3C1175 462.293 1175 462.286 1175 462.279C1175 462.255 1175 462.229 1175 462.205C1175 462.2 1175 462.198 1175 462.193C1175.04 453.6 1177.05 445.384 1180.63 437.958C1182.4 434.269 1184.57 430.776 1187.08 427.527C1191.47 441.294 1197.42 447.972 1202.8 451.465C1204.04 452.275 1205.28 452.929 1206.51 453.456L1208.28 454.119L1209.98 454.746L1211.59 455.193L1212.35 455.373L1213.71 455.552H1214.99C1216.38 455.666 1217.77 455.605 1219.14 455.605C1220.1 455.605 1221.06 455.589 1222.01 455.572C1222.96 455.555 1223.9 455.539 1224.83 455.539C1227.9 455.539 1230.86 455.722 1233.66 456.704L1236.38 457.969L1237.57 458.685L1239.71 460.502C1239.99 460.772 1240.26 461.056 1240.53 461.355C1250.84 472.73 1243.12 489.121 1250.76 506.856C1252.34 510.528 1254.66 514.454 1258.18 518.317C1251.68 520.468 1244.73 521.628 1237.52 521.628Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_18" d="M1237.53 521.518C1236.97 521.518 1236.41 521.511 1235.84 521.497C1236.4 521.511 1236.96 521.518 1237.52 521.518C1244.73 521.518 1251.68 520.358 1258.18 518.207C1254.66 514.343 1252.34 510.418 1250.76 506.746C1243.12 489.011 1250.84 472.619 1240.53 461.245C1240.26 460.946 1239.99 460.662 1239.71 460.392L1237.48 458.506L1236.55 457.969L1233.66 456.594C1230.86 455.612 1227.9 455.428 1224.83 455.428C1223.9 455.428 1222.96 455.445 1222.01 455.462C1221.06 455.479 1220.1 455.495 1219.14 455.495C1217.77 455.495 1216.39 455.462 1214.99 455.347H1213.46L1210.15 454.746L1206.51 453.346C1205.28 452.819 1204.04 452.164 1202.8 451.355C1197.42 447.862 1191.47 441.184 1187.08 427.417C1195.32 416.739 1207.24 408.707 1221.16 405.095C1225.73 403.91 1230.51 403.203 1235.45 403.034C1236.21 403.008 1236.97 402.993 1237.72 402.993C1237.73 402.993 1237.75 402.993 1237.76 402.993C1271.94 402.993 1300.2 429.016 1300.2 462.147C1300.2 495.292 1271.91 521.425 1237.71 521.518C1237.65 521.518 1237.59 521.518 1237.53 521.518ZM1175 462.279C1175 462.271 1175 462.262 1175 462.255C1175 462.264 1175 462.271 1175 462.279Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="C++" d="M1213.27 446.77C1216.63 446.77 1221.07 448.89 1223.15 451.53C1223.35 451.81 1223.79 452.01 1224.11 452.01C1224.79 452.01 1225.39 451.45 1225.39 450.77C1225.39 450.53 1225.23 450.17 1225.11 449.97C1223.91 448.53 1221.63 446.65 1219.95 445.81C1218.19 444.97 1215.19 444.25 1213.27 444.25C1204.91 444.25 1198.15 451.05 1198.15 459.37C1198.15 467.73 1204.91 474.53 1213.27 474.53C1215.19 474.53 1218.19 473.81 1219.95 472.97C1221.63 472.13 1223.91 470.25 1225.11 468.81C1225.23 468.61 1225.35 468.25 1225.35 468.01C1225.35 467.33 1224.79 466.77 1224.11 466.77C1223.79 466.77 1223.35 466.97 1223.15 467.25C1221.07 469.89 1216.63 472.01 1213.27 472.01C1206.31 472.01 1200.63 466.33 1200.63 459.41C1200.63 452.45 1206.31 446.77 1213.27 446.77ZM1249.08 458.17H1241.12V450.17C1241.12 449.49 1240.56 448.93 1239.88 448.93C1239.2 448.93 1238.64 449.49 1238.64 450.17V458.13H1230.68C1230 458.13 1229.44 458.69 1229.44 459.37C1229.44 460.09 1230 460.61 1230.68 460.61H1238.64V468.57C1238.64 469.29 1239.2 469.81 1239.88 469.81C1240.56 469.81 1241.12 469.29 1241.12 468.57V460.61H1249.08C1249.76 460.61 1250.32 460.09 1250.32 459.37C1250.32 458.69 1249.76 458.13 1249.08 458.13V458.17ZM1273.65 458.17H1265.69V450.17C1265.69 449.49 1265.13 448.93 1264.45 448.93C1263.77 448.93 1263.21 449.49 1263.21 450.17V458.13H1255.25C1254.57 458.13 1254.01 458.69 1254.01 459.37C1254.01 460.09 1254.57 460.61 1255.25 460.61H1263.21V468.57C1263.21 469.29 1263.77 469.81 1264.45 469.81C1265.13 469.81 1265.69 469.29 1265.69 468.57V460.61H1273.65C1274.33 460.61 1274.89 460.09 1274.89 459.37C1274.89 458.69 1274.33 458.13 1273.65 458.13V458.17Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="php_3"  onMouseOver={() => changeHoverID(18)} >
                <path id="path316_19" d="M1379.92 620.828C1379.25 620.828 1378.59 620.818 1377.92 620.797H1377.92C1377.16 620.775 1376.4 620.737 1375.65 620.689C1409.84 620.596 1438.14 594.463 1438.14 561.318C1438.14 528.187 1409.88 502.164 1375.7 502.164C1375.69 502.164 1375.67 502.164 1375.65 502.164C1376.41 502.114 1377.16 502.074 1377.92 502.047C1378.7 502.021 1379.48 502.009 1380.25 502.009C1386.87 502.009 1393.27 502.978 1399.29 504.781C1403.91 506.166 1408.31 508.043 1412.4 510.347C1413.14 510.762 1413.87 511.192 1414.59 511.636C1419.92 514.919 1424.69 518.949 1428.73 523.581C1430.18 525.236 1431.53 526.967 1432.78 528.767C1435.32 532.43 1437.45 536.382 1439.09 540.567C1439.75 542.246 1440.33 543.965 1440.83 545.715C1441.91 549.487 1442.6 553.417 1442.87 557.467C1442.96 558.735 1443 560.017 1443 561.309C1443 561.817 1442.99 562.321 1442.98 562.825C1442.87 566.862 1442.35 570.792 1441.43 574.579C1441.01 576.329 1440.51 578.046 1439.93 579.732C1438.5 583.893 1436.6 587.847 1434.28 591.541C1433.19 593.284 1432.01 594.967 1430.74 596.588C1427.21 601.111 1423.01 605.138 1418.29 608.55C1414.58 611.232 1410.55 613.531 1406.27 615.391C1404.47 616.172 1402.63 616.876 1400.75 617.499L1400.76 617.511C1400.7 617.53 1400.65 617.547 1400.59 617.564C1400.48 617.595 1400.38 617.626 1400.27 617.659C1399.84 617.8 1399.39 617.931 1398.95 618.063C1398.44 618.216 1397.93 618.366 1397.41 618.507C1396.96 618.629 1396.52 618.743 1396.07 618.855C1395.54 618.987 1395.02 619.111 1394.49 619.228C1394.04 619.328 1393.59 619.426 1393.14 619.517C1392.6 619.624 1392.05 619.725 1391.51 619.82C1391.32 619.853 1391.14 619.885 1390.95 619.918C1390.69 619.961 1390.43 620.004 1390.17 620.045C1389.6 620.133 1389.04 620.207 1388.47 620.278C1388.03 620.333 1387.59 620.393 1387.16 620.441C1386.81 620.477 1386.47 620.508 1386.12 620.539C1385.86 620.56 1385.6 620.582 1385.35 620.601C1384.93 620.634 1384.53 620.675 1384.11 620.699C1383.43 620.742 1382.75 620.761 1382.07 620.782C1381.72 620.794 1381.38 620.813 1381.03 620.818C1380.66 620.825 1380.29 620.828 1379.92 620.828Z" fill="url(#paint64_radial_44_2485)"/>
                <path id="path436_18" d="M1375.52 620.644C1374.96 620.644 1374.4 620.637 1373.84 620.623C1373.71 620.62 1373.58 620.618 1373.45 620.613C1373.38 620.611 1373.32 620.608 1373.25 620.606C1348.77 619.777 1328.14 605.69 1318.63 585.99C1315.01 578.495 1313 570.188 1313 561.49C1313 561.462 1313 561.433 1313 561.404C1313 561.397 1313 561.39 1313 561.38C1313 561.359 1313 561.337 1313 561.316C1313 561.309 1313 561.302 1313 561.294C1313 561.271 1313 561.244 1313 561.22C1313 561.216 1313 561.213 1313 561.208C1313.04 552.615 1315.05 544.399 1318.63 536.974C1320.4 533.285 1322.57 529.792 1325.08 526.542C1329.47 540.309 1335.42 546.988 1340.8 550.481C1342.04 551.29 1343.28 551.944 1344.51 552.472L1346.28 553.135L1347.98 553.761L1349.59 554.209L1350.35 554.388L1351.71 554.567H1352.99C1354.38 554.682 1355.77 554.621 1357.14 554.621C1358.1 554.621 1359.06 554.604 1360.01 554.588C1360.96 554.571 1361.9 554.554 1362.83 554.554C1365.9 554.554 1368.86 554.738 1371.66 555.719L1374.38 556.985L1375.57 557.701L1377.71 559.518C1377.99 559.788 1378.26 560.072 1378.53 560.37C1388.84 571.745 1381.12 588.136 1388.76 605.872C1390.34 609.544 1392.66 613.469 1396.18 617.332C1389.68 619.484 1382.73 620.644 1375.52 620.644Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_19" d="M1375.53 620.534C1374.97 620.534 1374.41 620.527 1373.84 620.512C1374.4 620.527 1374.96 620.534 1375.52 620.534C1382.73 620.534 1389.68 619.373 1396.18 617.222C1392.66 613.359 1390.34 609.434 1388.76 605.761C1381.12 588.026 1388.84 571.635 1378.53 560.26C1378.26 559.962 1377.99 559.677 1377.71 559.408L1375.48 557.521L1374.55 556.984L1371.66 555.609C1368.86 554.628 1365.9 554.444 1362.83 554.444C1361.9 554.444 1360.96 554.46 1360.01 554.477C1359.06 554.494 1358.1 554.511 1357.14 554.511C1355.77 554.511 1354.39 554.477 1352.99 554.363H1351.46L1348.15 553.761L1344.51 552.362C1343.28 551.834 1342.04 551.18 1340.8 550.37C1335.42 546.877 1329.47 540.199 1325.08 526.432C1333.32 515.754 1345.24 507.722 1359.16 504.11C1363.73 502.926 1368.51 502.219 1373.45 502.049C1374.21 502.023 1374.97 502.009 1375.72 502.009C1375.73 502.009 1375.75 502.009 1375.76 502.009C1409.94 502.009 1438.2 528.032 1438.2 561.163C1438.2 594.308 1409.91 620.441 1375.71 620.534C1375.65 620.534 1375.59 620.534 1375.53 620.534ZM1313 561.294C1313 561.287 1313 561.277 1313 561.27C1313 561.28 1313 561.287 1313 561.294Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="C#" d="M1362.15 546.775C1365.51 546.775 1369.95 548.895 1372.03 551.535C1372.23 551.815 1372.67 552.015 1372.99 552.015C1373.67 552.015 1374.27 551.455 1374.27 550.775C1374.27 550.535 1374.11 550.175 1373.99 549.975C1372.79 548.535 1370.51 546.655 1368.83 545.815C1367.07 544.975 1364.07 544.255 1362.15 544.255C1353.79 544.255 1347.03 551.055 1347.03 559.375C1347.03 567.735 1353.79 574.535 1362.15 574.535C1364.07 574.535 1367.07 573.815 1368.83 572.975C1370.51 572.135 1372.79 570.255 1373.99 568.815C1374.11 568.615 1374.23 568.255 1374.23 568.015C1374.23 567.335 1373.67 566.775 1372.99 566.775C1372.67 566.775 1372.23 566.975 1372.03 567.255C1369.95 569.895 1365.51 572.015 1362.15 572.015C1355.19 572.015 1349.51 566.335 1349.51 559.415C1349.51 552.455 1355.19 546.775 1362.15 546.775ZM1401.76 557.615H1397.64L1399.84 545.815C1399.84 545.735 1399.84 545.655 1399.84 545.575C1399.84 544.895 1399.28 544.335 1398.6 544.335C1398.04 544.335 1397.48 544.775 1397.4 545.375L1395.12 557.615H1387.8L1389.96 545.815C1390 545.735 1390 545.655 1390 545.575C1390 544.895 1389.44 544.335 1388.76 544.335C1388.16 544.335 1387.64 544.775 1387.52 545.375L1385.28 557.615H1380.56C1379.88 557.615 1379.32 558.175 1379.32 558.855C1379.32 559.535 1379.88 560.095 1380.56 560.095H1384.8L1384.08 564.095H1379.36C1378.68 564.095 1378.12 564.655 1378.12 565.335C1378.12 566.055 1378.68 566.615 1379.36 566.615H1383.6L1382.44 572.975C1382.4 573.055 1382.4 573.135 1382.4 573.215C1382.4 573.895 1382.96 574.455 1383.64 574.455C1384.24 574.455 1384.76 574.015 1384.88 573.415L1386.12 566.575H1393.44L1392.28 572.975C1392.28 573.055 1392.24 573.175 1392.24 573.255C1392.24 573.935 1392.8 574.495 1393.48 574.495C1394.08 574.495 1394.64 574.015 1394.72 573.415L1396 566.575H1400.56C1401.28 566.575 1401.84 566.055 1401.84 565.335C1401.84 564.655 1401.28 564.095 1400.56 564.095H1396.44L1397.2 560.095H1401.76C1401.8 560.095 1401.8 560.095 1401.8 560.095C1402.48 560.095 1403.04 559.535 1403.04 558.855C1403.04 558.175 1402.48 557.615 1401.8 557.615C1401.8 557.615 1401.8 557.615 1401.76 557.615ZM1394.64 560.095L1393.92 564.095H1386.6L1387.32 560.095H1394.64Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="php_4"  onMouseOver={() => changeHoverID(16)} >
                <path id="path316_20" d="M1227.92 673.306C1227.25 673.306 1226.59 673.296 1225.92 673.275H1225.92C1225.16 673.253 1224.4 673.215 1223.65 673.167C1257.84 673.074 1286.14 646.942 1286.14 613.796C1286.14 580.665 1257.88 554.643 1223.7 554.643C1223.69 554.643 1223.67 554.643 1223.65 554.643C1224.41 554.592 1225.16 554.552 1225.92 554.526C1226.7 554.499 1227.48 554.487 1228.25 554.487C1234.87 554.487 1241.27 555.457 1247.29 557.259C1251.91 558.644 1256.31 560.521 1260.4 562.825C1261.14 563.24 1261.87 563.67 1262.59 564.114C1267.92 567.397 1272.69 571.428 1276.73 576.06C1278.18 577.714 1279.53 579.445 1280.78 581.246C1283.32 584.908 1285.45 588.86 1287.09 593.045C1287.75 594.724 1288.33 596.443 1288.83 598.193C1289.91 601.966 1290.6 605.896 1290.87 609.945C1290.96 611.213 1291 612.495 1291 613.787C1291 614.295 1290.99 614.799 1290.98 615.303C1290.87 619.34 1290.35 623.27 1289.43 627.057C1289.01 628.807 1288.51 630.524 1287.93 632.21C1286.5 636.372 1284.6 640.325 1282.28 644.019C1281.19 645.762 1280.01 647.445 1278.74 649.067C1275.21 653.589 1271.01 657.617 1266.29 661.029C1262.58 663.71 1258.55 666.009 1254.27 667.869C1252.47 668.65 1250.63 669.354 1248.75 669.978L1248.76 669.99C1248.7 670.009 1248.65 670.025 1248.59 670.042C1248.48 670.073 1248.38 670.104 1248.27 670.138C1247.84 670.278 1247.39 670.41 1246.95 670.541C1246.44 670.694 1245.93 670.844 1245.41 670.985C1244.96 671.107 1244.52 671.222 1244.07 671.334C1243.54 671.465 1243.02 671.589 1242.49 671.706C1242.04 671.806 1241.59 671.904 1241.14 671.995C1240.6 672.103 1240.05 672.203 1239.51 672.298C1239.32 672.332 1239.14 672.363 1238.95 672.396C1238.69 672.439 1238.43 672.482 1238.17 672.523C1237.6 672.611 1237.04 672.685 1236.47 672.757C1236.03 672.812 1235.59 672.871 1235.16 672.919C1234.81 672.955 1234.47 672.986 1234.12 673.017C1233.86 673.039 1233.6 673.06 1233.35 673.079C1232.93 673.113 1232.53 673.153 1232.11 673.177C1231.43 673.22 1230.75 673.239 1230.07 673.261C1229.72 673.273 1229.38 673.292 1229.03 673.296C1228.66 673.304 1228.29 673.306 1227.92 673.306Z" fill="url(#paint65_radial_44_2485)"/>
                <path id="path436_19" d="M1223.52 673.122C1222.96 673.122 1222.4 673.115 1221.84 673.101C1221.71 673.098 1221.58 673.096 1221.45 673.091C1221.38 673.089 1221.32 673.087 1221.25 673.084C1196.77 672.256 1176.14 658.169 1166.63 638.468C1163.01 630.973 1161 622.667 1161 613.969C1161 613.94 1161 613.911 1161 613.883C1161 613.875 1161 613.868 1161 613.859C1161 613.837 1161 613.816 1161 613.794C1161 613.787 1161 613.78 1161 613.773C1161 613.749 1161 613.723 1161 613.699C1161 613.694 1161 613.692 1161 613.687C1161.04 605.094 1163.05 596.878 1166.63 589.452C1168.4 585.763 1170.57 582.27 1173.08 579.021C1177.47 592.788 1183.42 599.466 1188.8 602.959C1190.04 603.769 1191.28 604.423 1192.51 604.95L1194.28 605.613L1195.98 606.24L1197.59 606.687L1198.35 606.866L1199.71 607.046H1200.99C1202.38 607.16 1203.77 607.099 1205.14 607.099C1206.1 607.099 1207.06 607.083 1208.01 607.066C1208.96 607.049 1209.9 607.032 1210.83 607.032C1213.9 607.032 1216.86 607.216 1219.66 608.198L1222.38 609.463L1223.57 610.179L1225.71 611.996C1225.99 612.266 1226.26 612.55 1226.53 612.849C1236.84 624.223 1229.12 640.615 1236.76 658.35C1238.34 662.022 1240.66 665.947 1244.18 669.811C1237.68 671.962 1230.73 673.122 1223.52 673.122Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_20" d="M1223.53 673.012C1222.97 673.012 1222.41 673.005 1221.84 672.99C1222.4 673.005 1222.96 673.012 1223.52 673.012C1230.73 673.012 1237.68 671.852 1244.18 669.7C1240.66 665.837 1238.34 661.912 1236.76 658.24C1229.12 640.504 1236.84 624.113 1226.53 612.738C1226.26 612.44 1225.99 612.156 1225.71 611.886L1223.48 610L1222.55 609.463L1219.66 608.087C1216.86 607.106 1213.9 606.922 1210.83 606.922C1209.9 606.922 1208.96 606.939 1208.01 606.955C1207.06 606.972 1206.1 606.989 1205.14 606.989C1203.77 606.989 1202.39 606.955 1200.99 606.841H1199.46L1196.15 606.239L1192.51 604.84C1191.28 604.312 1190.04 603.658 1188.8 602.849C1183.42 599.356 1177.47 592.677 1173.08 578.91C1181.32 568.233 1193.24 560.201 1207.16 556.588C1211.73 555.404 1216.51 554.697 1221.45 554.528C1222.21 554.501 1222.97 554.487 1223.72 554.487C1223.73 554.487 1223.75 554.487 1223.76 554.487C1257.94 554.487 1286.2 580.51 1286.2 613.641C1286.2 646.786 1257.91 672.919 1223.71 673.012C1223.65 673.012 1223.59 673.012 1223.53 673.012ZM1161 613.772C1161 613.765 1161 613.755 1161 613.748C1161 613.758 1161 613.765 1161 613.772Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="Python" d="M1184.09 596.966C1183.55 596.966 1183.1 597.414 1183.1 597.958V619.878C1183.1 620.454 1183.55 620.87 1184.09 620.87C1184.63 620.87 1185.08 620.454 1185.08 619.878V617.318C1186.01 617.254 1187.42 616.87 1188.28 616.486C1189.21 616.07 1190.59 615.11 1191.29 614.406C1192.95 612.742 1194.3 609.51 1194.3 607.174C1194.3 604.838 1192.95 601.606 1191.29 599.974C1189.66 598.31 1186.43 596.966 1184.12 596.966C1184.09 596.966 1184.09 596.966 1184.09 596.966ZM1185.08 599.014C1189.18 599.526 1192.31 603.014 1192.31 607.174C1192.31 611.334 1189.18 614.854 1185.08 615.334V599.014ZM1211.57 607.142C1211.44 607.046 1211.19 606.982 1211.03 606.982C1210.74 606.982 1210.36 607.174 1210.2 607.43L1203.12 618.406L1199.51 607.654C1199.38 607.302 1198.96 607.014 1198.58 607.014C1198.04 607.014 1197.59 607.462 1197.59 608.006C1197.59 608.102 1197.62 608.23 1197.62 608.294L1201.75 620.518L1198.32 625.83C1198.23 625.958 1198.16 626.214 1198.16 626.374C1198.16 626.95 1198.61 627.398 1199.16 627.398C1199.48 627.398 1199.83 627.174 1200.02 626.886L1211.89 608.518C1211.96 608.39 1212.02 608.134 1212.02 607.974C1212.02 607.686 1211.83 607.302 1211.57 607.142ZM1221.82 607.91C1222.36 607.91 1222.81 607.462 1222.81 606.918C1222.81 606.374 1222.36 605.926 1221.82 605.926H1216.63V597.958C1216.63 597.414 1216.18 596.966 1215.64 596.966C1215.1 596.966 1214.65 597.414 1214.65 597.958V613.734C1214.65 617.67 1217.85 620.87 1221.78 620.87H1221.82C1222.36 620.87 1222.81 620.454 1222.81 619.878C1222.81 619.334 1222.36 618.886 1221.82 618.886C1218.97 618.886 1216.63 616.582 1216.63 613.734V607.91H1221.82ZM1227.79 620.134C1227.79 617.062 1230.28 614.566 1233.36 614.566C1236.43 614.566 1238.92 617.062 1238.92 620.134C1238.92 620.71 1239.37 621.158 1239.92 621.158C1240.49 621.158 1240.94 620.71 1240.94 620.134C1240.94 615.942 1237.55 612.55 1233.36 612.55C1231.63 612.55 1229.23 613.542 1227.98 614.758C1227.92 614.854 1227.85 614.918 1227.79 614.982V597.702C1227.79 597.126 1227.34 596.678 1226.8 596.678C1226.22 596.678 1225.77 597.126 1225.77 597.702V620.134C1225.77 620.71 1226.22 621.158 1226.8 621.158C1227.34 621.158 1227.79 620.71 1227.79 620.134ZM1255.21 608.966C1254.09 607.814 1251.85 606.886 1250.22 606.886C1246.32 606.886 1243.15 610.054 1243.15 613.958C1243.15 617.862 1246.32 621.03 1250.22 621.03C1254.13 621.03 1257.29 617.862 1257.29 613.958C1257.29 612.326 1256.37 610.118 1255.21 608.966ZM1250.22 619.046C1247.41 619.046 1245.13 616.774 1245.13 613.958C1245.13 611.174 1247.41 608.87 1250.22 608.87C1253.04 608.87 1255.31 611.174 1255.31 613.958C1255.31 616.774 1253.04 619.046 1250.22 619.046ZM1265.55 606.918C1262.1 606.918 1259.28 609.734 1259.28 613.19V620.038C1259.28 620.582 1259.7 621.03 1260.24 621.03C1260.78 621.03 1261.23 620.582 1261.23 620.038V613.19C1261.23 610.822 1263.15 608.902 1265.55 608.902C1267.92 608.902 1269.84 610.822 1269.84 613.19V620.038C1269.84 620.582 1270.29 620.998 1270.83 620.998C1271.38 620.998 1271.79 620.582 1271.79 620.038V613.19C1271.79 609.734 1269.01 606.918 1265.55 606.918Z" fill="white" fillOpacity="0.5"/>
                </g>
                <g id="php_5"  onMouseOver={() => changeHoverID(19)} >
                <path id="path316_21" d="M1392.92 462.403C1392.25 462.403 1391.59 462.393 1390.92 462.372H1390.92C1390.16 462.35 1389.4 462.312 1388.65 462.264C1422.84 462.171 1451.14 436.039 1451.14 402.893C1451.14 369.762 1422.88 343.739 1388.7 343.739C1388.69 343.739 1388.67 343.739 1388.65 343.739C1389.41 343.689 1390.16 343.649 1390.92 343.622C1391.7 343.596 1392.48 343.584 1393.25 343.584C1399.87 343.584 1406.27 344.554 1412.29 346.356C1416.91 347.741 1421.31 349.618 1425.4 351.922C1426.14 352.337 1426.87 352.767 1427.59 353.211C1432.92 356.494 1437.69 360.525 1441.73 365.157C1443.18 366.811 1444.53 368.542 1445.78 370.343C1448.32 374.005 1450.45 377.957 1452.09 382.142C1452.75 383.821 1453.33 385.54 1453.83 387.29C1454.91 391.063 1455.6 394.993 1455.87 399.042C1455.96 400.31 1456 401.592 1456 402.884C1456 403.392 1455.99 403.896 1455.98 404.4C1455.87 408.437 1455.35 412.367 1454.43 416.154C1454.01 417.904 1453.51 419.621 1452.93 421.307C1451.5 425.468 1449.6 429.422 1447.28 433.116C1446.19 434.859 1445.01 436.542 1443.74 438.164C1440.21 442.686 1436.01 446.714 1431.29 450.126C1427.58 452.807 1423.55 455.106 1419.27 456.966C1417.47 457.747 1415.63 458.451 1413.75 459.074L1413.76 459.086C1413.7 459.106 1413.65 459.122 1413.59 459.139C1413.48 459.17 1413.38 459.201 1413.27 459.234C1412.84 459.375 1412.39 459.507 1411.95 459.638C1411.44 459.791 1410.93 459.941 1410.41 460.082C1409.96 460.204 1409.52 460.318 1409.07 460.431C1408.54 460.562 1408.02 460.686 1407.49 460.803C1407.04 460.903 1406.59 461.001 1406.14 461.092C1405.6 461.199 1405.05 461.3 1404.51 461.395C1404.32 461.429 1404.14 461.46 1403.95 461.493C1403.69 461.536 1403.43 461.579 1403.17 461.62C1402.6 461.708 1402.04 461.782 1401.47 461.854C1401.03 461.909 1400.59 461.968 1400.16 462.016C1399.81 462.052 1399.47 462.083 1399.12 462.114C1398.86 462.135 1398.6 462.157 1398.35 462.176C1397.93 462.209 1397.53 462.25 1397.11 462.274C1396.43 462.317 1395.75 462.336 1395.07 462.358C1394.72 462.369 1394.38 462.389 1394.03 462.393C1393.66 462.4 1393.29 462.403 1392.92 462.403Z" fill="url(#paint66_radial_44_2485)"/>
                <path id="path436_20" d="M1388.52 462.219C1387.96 462.219 1387.4 462.212 1386.84 462.197C1386.71 462.195 1386.58 462.193 1386.45 462.188C1386.38 462.186 1386.32 462.183 1386.25 462.181C1361.77 461.352 1341.14 447.265 1331.63 427.565C1328.01 420.07 1326 411.763 1326 403.065C1326 403.037 1326 403.008 1326 402.979C1326 402.972 1326 402.965 1326 402.955C1326 402.934 1326 402.912 1326 402.891C1326 402.884 1326 402.877 1326 402.869C1326 402.845 1326 402.819 1326 402.795C1326 402.791 1326 402.788 1326 402.783C1326.04 394.19 1328.05 385.974 1331.63 378.549C1333.4 374.86 1335.57 371.367 1338.08 368.117C1342.47 381.884 1348.42 388.563 1353.8 392.056C1355.04 392.865 1356.28 393.519 1357.51 394.047L1359.28 394.71L1360.98 395.336L1362.59 395.784L1363.35 395.963L1364.71 396.142H1365.99C1367.38 396.257 1368.77 396.196 1370.14 396.196C1371.1 396.196 1372.06 396.179 1373.01 396.163C1373.96 396.146 1374.9 396.129 1375.83 396.129C1378.9 396.129 1381.86 396.313 1384.66 397.294L1387.38 398.56L1388.57 399.276L1390.71 401.093C1390.99 401.363 1391.26 401.647 1391.53 401.945C1401.84 413.32 1394.12 429.711 1401.76 447.447C1403.34 451.119 1405.66 455.044 1409.18 458.907C1402.68 461.059 1395.73 462.219 1388.52 462.219Z" fill="#423A9C" fillOpacity="0.4"/>
                <path id="path334_21" d="M1388.53 462.109C1387.97 462.109 1387.41 462.102 1386.84 462.087C1387.4 462.102 1387.96 462.109 1388.52 462.109C1395.73 462.109 1402.68 460.948 1409.18 458.797C1405.66 454.934 1403.34 451.009 1401.76 447.337C1394.12 429.601 1401.84 413.21 1391.53 401.835C1391.26 401.537 1390.99 401.253 1390.71 400.983L1388.48 399.097L1387.55 398.559L1384.66 397.184C1381.86 396.203 1378.9 396.019 1375.83 396.019C1374.9 396.019 1373.96 396.036 1373.01 396.052C1372.06 396.069 1371.1 396.086 1370.14 396.086C1368.77 396.086 1367.39 396.052 1365.99 395.938H1364.46L1361.15 395.336L1357.51 393.937C1356.28 393.409 1355.04 392.755 1353.8 391.946C1348.42 388.453 1342.47 381.774 1338.08 368.007C1346.32 357.33 1358.24 349.298 1372.16 345.685C1376.73 344.501 1381.51 343.794 1386.45 343.625C1387.21 343.598 1387.97 343.584 1388.72 343.584C1388.73 343.584 1388.75 343.584 1388.76 343.584C1422.94 343.584 1451.2 369.607 1451.2 402.738C1451.2 435.883 1422.91 462.016 1388.71 462.109C1388.65 462.109 1388.59 462.109 1388.53 462.109ZM1326 402.869C1326 402.862 1326 402.852 1326 402.845C1326 402.855 1326 402.862 1326 402.869Z" fill="#423A9C" fillOpacity="0.6"/>
                <path id="C" d="M1388.84 388.35C1392.2 388.35 1396.64 390.47 1398.72 393.11C1398.92 393.39 1399.36 393.59 1399.68 393.59C1400.36 393.59 1400.96 393.03 1400.96 392.35C1400.96 392.11 1400.8 391.75 1400.68 391.55C1399.48 390.11 1397.2 388.23 1395.52 387.39C1393.76 386.55 1390.76 385.83 1388.84 385.83C1380.48 385.83 1373.72 392.63 1373.72 400.95C1373.72 409.31 1380.48 416.11 1388.84 416.11C1390.76 416.11 1393.76 415.39 1395.52 414.55C1397.2 413.71 1399.48 411.83 1400.68 410.39C1400.8 410.19 1400.92 409.83 1400.92 409.59C1400.92 408.91 1400.36 408.35 1399.68 408.35C1399.36 408.35 1398.92 408.55 1398.72 408.83C1396.64 411.47 1392.2 413.59 1388.84 413.59C1381.88 413.59 1376.2 407.91 1376.2 400.99C1376.2 394.03 1381.88 388.35 1388.84 388.35Z" fill="white" fillOpacity="0.5"/>
                </g>
                </g>
                </g>
                </g>
                <defs>
                <radialGradient id="paint0_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(636.681 745.723) rotate(-51.8054) scale(459.853 723.453)">
                <stop offset="0.0729167" stopColor="#FF7F83"/>
                <stop offset="0.474206" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </radialGradient>
                <linearGradient id="paint1_linear_44_2485" x1="681.499" y1="475.69" x2="691.079" y2="474.957" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint2_linear_44_2485" x1="661.198" y1="478.108" x2="672.923" y2="477.213" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint3_linear_44_2485" x1="756.465" y1="521.908" x2="768.19" y2="521.013" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint4_linear_44_2485" x1="748.285" y1="517.591" x2="760.009" y2="516.696" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint5_linear_44_2485" x1="653.327" y1="482.973" x2="670.574" y2="481.656" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint6_linear_44_2485" x1="754.341" y1="536.154" x2="771.157" y2="534.871" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint7_linear_44_2485" x1="646.745" y1="487.112" x2="666.276" y2="485.621" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint8_linear_44_2485" x1="745.511" y1="539.069" x2="764.471" y2="537.622" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint9_linear_44_2485" x1="744.642" y1="539.069" x2="763.602" y2="537.622" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint10_linear_44_2485" x1="648.131" y1="492.782" x2="659.854" y2="491.886" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint11_linear_44_2485" x1="656.314" y1="497.1" x2="668.037" y2="496.203" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint12_linear_44_2485" x1="757.634" y1="529.506" x2="769.296" y2="528.615" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint13_linear_44_2485" x1="741.997" y1="529.507" x2="753.659" y2="528.616" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint14_linear_44_2485" x1="740.26" y1="512.531" x2="751.922" y2="511.641" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint15_linear_44_2485" x1="731.572" y1="507.438" x2="743.234" y2="506.546" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint16_linear_44_2485" x1="722.885" y1="502.345" x2="734.547" y2="501.455" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint17_linear_44_2485" x1="713.379" y1="496.781" x2="725.041" y2="495.891" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint18_linear_44_2485" x1="704.692" y1="491.688" x2="716.353" y2="490.797" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint19_linear_44_2485" x1="696.004" y1="486.596" x2="707.666" y2="485.704" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint20_linear_44_2485" x1="704.691" y1="501.874" x2="716.353" y2="500.982" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint21_linear_44_2485" x1="696.005" y1="496.782" x2="707.667" y2="495.892" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint22_linear_44_2485" x1="687.317" y1="491.688" x2="698.979" y2="490.797" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint23_linear_44_2485" x1="696.038" y1="506.967" x2="707.7" y2="506.076" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint24_linear_44_2485" x1="687.351" y1="501.875" x2="699.013" y2="500.983" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint25_linear_44_2485" x1="678.664" y1="496.782" x2="690.327" y2="495.893" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint26_linear_44_2485" x1="666.471" y1="502.681" x2="679.683" y2="501.671" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint27_linear_44_2485" x1="670.846" y1="491.689" x2="682.508" y2="490.799" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint28_linear_44_2485" x1="678.63" y1="486.596" x2="690.292" y2="485.704" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint29_linear_44_2485" x1="669.942" y1="482.352" x2="681.604" y2="481.461" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint30_linear_44_2485" x1="687.352" y1="481.504" x2="699.014" y2="480.612" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint31_linear_44_2485" x1="731.64" y1="517.153" x2="743.302" y2="516.263" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint32_linear_44_2485" x1="722.952" y1="512.06" x2="734.614" y2="511.168" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint33_linear_44_2485" x1="714.265" y1="506.968" x2="725.927" y2="506.078" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint34_linear_44_2485" x1="722.083" y1="522.245" x2="733.745" y2="521.354" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint35_linear_44_2485" x1="713.396" y1="517.153" x2="725.059" y2="516.263" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint36_linear_44_2485" x1="704.709" y1="512.06" x2="716.371" y2="511.17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint37_linear_44_2485" x1="749.011" y1="524.962" x2="760.673" y2="524.07" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint38_linear_44_2485" x1="755.132" y1="514.521" x2="764.711" y2="513.789" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DCCBDE"/>
                <stop offset="1" stopColor="#B48DB8"/>
                </linearGradient>
                <linearGradient id="paint39_linear_44_2485" x1="897.971" y1="429.776" x2="889.869" y2="458.429" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7F83"/>
                <stop offset="0.0805391" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </linearGradient>
                <linearGradient id="paint40_linear_44_2485" x1="897.553" y1="407.105" x2="889.449" y2="435.761" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7F83"/>
                <stop offset="0.0805391" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </linearGradient>
                <linearGradient id="paint41_linear_44_2485" x1="870.215" y1="424.441" x2="853.749" y2="450.129" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7F83"/>
                <stop offset="0.0805391" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </linearGradient>
                <linearGradient id="paint42_linear_44_2485" x1="900.841" y1="407.751" x2="884.373" y2="433.441" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7F83"/>
                <stop offset="0.0805391" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </linearGradient>
                <linearGradient id="paint43_linear_44_2485" x1="901.539" y1="423.983" x2="885.076" y2="449.672" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7F83"/>
                <stop offset="0.0805391" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </linearGradient>
                <radialGradient id="paint44_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(947.094 489.242) rotate(-52.2362) scale(31.1104 61.7455)">
                <stop offset="0.177083" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </radialGradient>
                <radialGradient id="paint45_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(956.863 472.139) rotate(-71.1572) scale(30.4462 39.5318)">
                <stop offset="0.177083" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </radialGradient>
                <radialGradient id="paint46_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(926.235 487.006) rotate(-76.4313) scale(40.9328 40.5561)">
                <stop offset="0.177083" stopColor="#FF7F83"/>
                <stop offset="0.614583" stopColor="#7E43A6"/>
                <stop offset="0.72619" stopColor="#5746A5"/>
                <stop offset="1" stopColor="#423A9C"/>
                </radialGradient>
                <radialGradient id="paint47_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(183.04 275.327) rotate(106.458) scale(121.206 300.376)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint48_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(339.332 307.606) rotate(106.458) scale(121.206 300.376)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint49_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.797 409.642) rotate(106.68) scale(101.112 253.896)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint50_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.244 467.605) rotate(107.012) scale(81.02 207.399)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint51_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4084 381.71) rotate(106.68) scale(101.112 253.896)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint52_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1126.56 107.422) rotate(113.896) scale(121.306 300.129)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint53_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1115.17 284.997) rotate(114.118) scale(101.196 253.685)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint54_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(940.467 48.1782) rotate(113.896) scale(121.306 300.129)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint55_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(818.607 155.929) rotate(113.896) scale(121.306 300.129)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint56_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(985.794 181.257) rotate(113.738) scale(141.417 346.563)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint57_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1274.93 198.951) rotate(113.896) scale(121.306 300.129)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint58_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.546 114.49) rotate(94.5727) scale(121.118 300.594)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint59_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(595.298 165.225) rotate(94.5727) scale(121.118 300.594)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint60_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450.376 208.213) rotate(94.5727) scale(121.118 300.594)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint61_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(658.234 22.8243) rotate(94.5727) scale(121.118 300.594)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint62_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(486.681 40.0887) rotate(94.4138) scale(141.201 347.094)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint63_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1253.87 402.994) rotate(105.131) scale(121.192 300.412)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint64_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1391.87 502.009) rotate(105.131) scale(121.192 300.412)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint65_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1239.87 554.487) rotate(105.131) scale(121.192 300.412)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                <radialGradient id="paint66_radial_44_2485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1404.87 343.584) rotate(105.131) scale(121.192 300.412)">
                <stop stopColor="#423A9C" stopOpacity="0.8"/>
                <stop offset="1" stopColor="#423A9C" stopOpacity="0.6"/>
                </radialGradient>
                </defs>
            </svg>
            <div className={ HoverID == -1 ? 'skillBox' : 'skillBox active'}>
                <div className='title'>
                    <img src={getSkill(HoverID)[2]} alt="" width="60px" />
                    <a href={getSkill(HoverID)[1]} target="_blank" className='hover-me hover-under'>
                        {getSkill(HoverID)[0]}
                    </a>
                </div>
                <div className="text">
                    <div className="blockText active"></div>
                    <span className='year hover-me'>
                        First bite: 
                        <span id="feature-text"></span>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Table
