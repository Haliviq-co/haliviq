import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  claude: { hex: '#D97757', path: 'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z' },
  python: { hex: '#3776AB', path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z' },
  typescript: { hex: '#3178C6', path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
  nextdotjs: { hex: '#FFFFFF', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  postgresql: { hex: '#4169E1', path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z' },
  apachekafka: { hex: '#FFFFFF', path: 'M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118' },
  graphql: { hex: '#E10098', path: 'M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z' },
  kubernetes: { hex: '#326CE5', path: 'M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 4.75l-.723.349-.006.012a.578.578 0 0 0 .17.756l.001.012 2.144 1.522a5.171 5.171 0 0 0 .89-3.096l-2.476.445zm5.926 1.437l-.015-.005a.44.44 0 0 0-.35-.502l-2.577-.433-.004.006a.44.44 0 0 0-.484.606l-.007.01.998 2.409a5.184 5.184 0 0 0 2.44-2.09zM12.06 24a1.968 1.968 0 0 1-.769-.157l-.005-.003-6.573-2.819a1.978 1.978 0 0 1-1.164-1.593l-.001-.009-1.114-7.082a1.968 1.968 0 0 1 .374-1.492l.006-.008 4.576-5.578a1.976 1.976 0 0 1 1.526-.72h.01l7.144-.003h.01c.596 0 1.155.267 1.529.723l4.578 5.581.005.008c.351.427.502.973.418 1.51v.01l-1.11 7.056-.003.017a1.987 1.987 0 0 1-1.174 1.598l-6.562 2.815-.01.004a1.973 1.973 0 0 1-.755.152zm-.667-1.28a.615.615 0 0 0 .245.203l.117.047a.605.605 0 0 0 .48-.024l.012-.005 6.573-2.817.015-.006a.63.63 0 0 0 .375-.512l.002-.017 1.111-7.061.002-.01a.626.626 0 0 0-.132-.473l-.006-.008-4.579-5.582-.007-.008a.622.622 0 0 0-.485-.229h-.008l-7.148.003h-.007a.62.62 0 0 0-.484.229l-.007.008-4.576 5.578-.007.008a.622.622 0 0 0-.118.472l1.114 7.083.002.014c.03.216.164.41.363.507l.015.007 6.573 2.818.014.007a.609.609 0 0 0 .53-.02z' },
  terraform: { hex: '#844FBA', path: 'M12.042 2.475v6.115l5.296 3.057V5.532zm6.155 9.352v6.116L23.5 14.886V8.77zm-12.319.013v6.115l5.296 3.057v-6.115zM.5 8.79v6.116l5.296 3.057V11.85zM12.042 15.9v6.115l5.296 3.057v-6.115z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Forward-Deployed Engineers for Hire in Thailand | Haliviq'
    : 'จ้างวิศวกรเข้าไปทำงานในองค์กร (Forward-Deployed) | Haliviq'
  const description = isEN
    ? 'Embed senior engineers in your team to ship AI to production, connect legacy systems, and work inside your security perimeter. Weekly releases, full handover.'
    : 'Haliviq ส่งวิศวกรอาวุโสเข้าไปทำงานในองค์กรคุณ ใช้เครื่องมือและ Repo ของคุณ พาระบบ AI ขึ้นระบบจริง เชื่อมระบบเก่า ปล่อยงานทุกสัปดาห์ พร้อมเอกสารส่งมอบ'
  const url = `https://haliviq.com/${params.lang}/services/forward-deployed-engineering`
  return {
    title,
    description,
    alternates: alt(url),
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Engineering / Forward-Deployed'  : 'Engineering / Forward-Deployed'
  const title    = isEN ? 'Your Team,'  : 'ทีมของคุณ,'
  const subtitle = isEN ? 'Your Tools, Your Office'    : 'เครื่องมือของคุณ, ออฟฟิศของคุณ'
  const heroDesc = isEN ? 'We place senior engineers inside your company, on your repositories and in your daily standup, to get an AI system or a stubborn integration into production. They take the connections to old internal systems that others turn down, work within your security rules, and show progress every week. When they leave, your own developers can run what was built.'  : 'เราส่งวิศวกรอาวุโสเข้าไปทำงานในบริษัทคุณ ใช้ Repository ของคุณ และเข้า Standup ประจำวันกับทีมคุณ เพื่อพาระบบ AI หรืองานเชื่อมต่อที่ยากให้ขึ้นระบบจริง พวกเขารับงานเชื่อมกับระบบเก่าภายในที่เจ้าอื่นปฏิเสธ ทำงานตามกฎความปลอดภัยของคุณ และโชว์ความคืบหน้าทุกสัปดาห์ พอพวกเขาถอนตัว นักพัฒนาของคุณก็ดูแลสิ่งที่สร้างไว้ต่อได้เอง'
  const whyTitle = isEN ? 'Why embedded engineering beats a typical vendor'    : 'ทำไมทีมวิศวกรที่ทำงานร่วมกับคุณถึงดีกว่าผู้รับเหมาทั่วไป'
  const whyDesc  = isEN ? 'A typical vendor takes a spec, goes quiet for a quarter, and comes back with something that was right six months ago. An embedded team is in the room when the requirement changes, hears why a rule exists, and can ask the person who owns the legacy database. Problems come up in week two, when they are cheap, instead of at the handover, when they are not.'  : 'ผู้รับเหมาทั่วไปรับสเปกไปแล้วเงียบไปทั้งไตรมาส แล้วกลับมาพร้อมงานที่ถูกต้องเมื่อหกเดือนก่อน ส่วนทีมที่ฝังตัวอยู่กับคุณจะอยู่ในห้องตอนที่ความต้องการเปลี่ยน ได้ยินว่ากฎข้อหนึ่งมีไว้ทำไม และถามเจ้าของฐานข้อมูลเก่าได้ตรงๆ ปัญหาจะโผล่ในสัปดาห์ที่สอง ตอนที่ยังแก้ถูก ไม่ใช่ตอนส่งมอบที่แก้แพง'
  const ctaTitle = isEN ? 'Ready to embed a team that ships?'    : 'พร้อมมีทีมที่เข้ามาทำงานร่วมและส่งงานได้จริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a scoping call. Tell us the mission, your systems, and the rules we would work under, and we will propose a team shape, a first-week plan, and what a good result looks like at week six.'   : 'เริ่มด้วยการคุยเพื่อกำหนดขอบเขต เล่าให้เราฟังว่าภารกิจคืออะไร ใช้ระบบอะไรอยู่ และเราต้องทำงานภายใต้กฎอะไรบ้าง แล้วเราจะเสนอหน้าตาทีม แผนสัปดาห์แรก และผลลัพธ์ที่ดีควรเป็นยังไงเมื่อถึงสัปดาห์ที่หก'
  const overviewText = isEN
    ? 'Forward-deployed engineering means senior engineers working inside your organization, in person or remotely, on your tools, your repositories, and your standups. Their job is to ship AI systems that reach production, not slide decks. They handle the integrations nobody else wants to touch, respect your security and compliance limits, release something your team can see every week, and write up what they built so that a normal engineering team can maintain it. You are never held hostage by a system only we understand.'
    : 'Forward-Deployed Engineering คือการให้วิศวกรอาวุโสเข้าไปทำงานในองค์กรของคุณ ทั้งที่ออฟฟิศหรือทางไกล บนเครื่องมือ Repository และ Standup ของคุณ งานของพวกเขาคือส่งมอบระบบ AI ที่ขึ้นระบบจริง ไม่ใช่สไลด์ พวกเขารับงานเชื่อมต่อที่ไม่มีใครอยากแตะ เคารพขอบเขตด้านความปลอดภัยและกฎระเบียบของคุณ ปล่อยของที่ทีมคุณเห็นได้ทุกสัปดาห์ และเขียนบันทึกสิ่งที่สร้างไว้ให้ทีมวิศวกรทั่วไปดูแลต่อได้ คุณจะไม่ถูกมัดไว้กับระบบที่มีแต่เราที่เข้าใจ'

  const heroBullets = isEN ? [
      'Senior engineers embedded in your team, your tools, and your daily routines',
      'AI systems taken to real production, not left as a proof of concept',
      'The hard integrations other vendors avoid, handled by people who sit next to the owners',
      'A weekly release your team can see, test, and redirect',
      'Work done inside your security perimeter, including SSO through SAML or OIDC',
      'A documented handover, so your own engineers can run and extend the system',
    ] : [
      'วิศวกรอาวุโสที่เข้าไปอยู่ในทีม เครื่องมือ และกิจวัตรประจำวันของคุณ',
      'พาระบบ AI ขึ้นระบบจริง ไม่ปล่อยค้างไว้เป็น Proof of Concept',
      'งานเชื่อมต่อยากๆ ที่เจ้าอื่นเลี่ยง ทำโดยคนที่นั่งข้างเจ้าของระบบ',
      'ปล่อยงานทุกสัปดาห์ ให้ทีมคุณดู ทดสอบ และเปลี่ยนทิศทางได้',
      'ทำงานภายในขอบเขตความปลอดภัยของคุณ รวมถึง SSO ผ่าน SAML หรือ OIDC',
      'ส่งมอบพร้อมเอกสาร ให้วิศวกรของคุณดูแลและต่อยอดระบบได้เอง',
    ]
  const whyPoints   = isEN ? [
      'A distant vendor delivers to a spec. An embedded team delivers to reality and adjusts as constraints appear.',
      'Releasing every week brings problems up early, rather than in one large handoff months down the line.',
      'The real blocker is usually the old system or internal tool the AI must connect to, not the model itself.',
      'Working inside your perimeter avoids the delay and risk of sending sensitive data to an outside vendor.',
      'A well-written handover means your team is not tied to us to keep the system alive.',
    ] : [
      'ผู้รับเหมาที่อยู่ไกลส่งงานตามสเปก ทีมที่ฝังตัวอยู่ด้วยกันส่งงานตามความจริง และปรับตามข้อจำกัดที่โผล่ขึ้นมา',
      'การปล่อยงานทุกสัปดาห์ทำให้ปัญหาโผล่เร็ว ไม่ใช่รวมไปโผล่ตอนส่งมอบก้อนใหญ่หลังผ่านไปหลายเดือน',
      'ตัวขวางจริงมักเป็นระบบเก่าหรือเครื่องมือภายในที่ AI ต้องเชื่อมด้วย ไม่ใช่ตัวโมเดลเอง',
      'การทำงานภายในขอบเขตของคุณ ตัดความล่าช้าและความเสี่ยงจากการส่งข้อมูลสำคัญออกไปให้ผู้รับเหมาภายนอก',
      'เอกสารส่งมอบที่เขียนดี ทำให้ทีมคุณไม่ต้องผูกกับเราเพื่อให้ระบบเดินต่อได้',
    ]
  const outcomes    = isEN ? [
      {stat: '1wk', label: 'First Shipped Increment', desc: 'From embed to first production commit'},
      {stat: '100%', label: 'Handovers Fully Documented', desc: 'Runbooks, architecture, and decisions'},
      {stat: '0', label: 'Vendor Black Boxes', desc: 'Every line of code is yours'},
      {stat: '15+', label: 'Systems Integrated', desc: 'Across forward-deployed engagements'}
    ] : [
      {stat: '1wk', label: 'ส่งงานแรกภายใน', desc: 'ตั้งแต่เข้าไปทำงานจนถึง Commit แรกบนระบบจริง'},
      {stat: '100%', label: 'เอกสารส่งมอบครบ', desc: 'Runbook, Architecture และการตัดสินใจ'},
      {stat: '0', label: 'กล่องดำจากผู้รับเหมา', desc: 'โค้ดทุกบรรทัดเป็นของคุณ'},
      {stat: '15+', label: 'ระบบที่เชื่อมต่อแล้ว', desc: 'ตลอดโครงการแบบ Forward-Deployed'}
    ]
  const features    = isEN ? [
      {icon: 'ti-users', title: 'Your Team, Your Tools, Your Office', desc: 'Our engineers join your chat, your issue tracker, your repositories, and your standup, at your office or remotely. They follow your branching rules and review process, so their work looks like part of your team’s from the first day.'},
      {icon: 'ti-rocket', title: 'AI That Reaches Production', desc: 'We build AI systems with logging, evaluation, fallbacks, and access control from the start, then take them live and watch them run. The aim is a system your staff relies on every day, not a demo that impresses once.'},
      {icon: 'ti-plug-connected', title: 'The Integrations Nobody Wants', desc: 'Old dispatch software, internal APIs with no documentation, and data spread over several systems. We work out how they behave by reading code, logs, and talking to the people who run them, then connect them with tests around every link.'},
      {icon: 'ti-file-check', title: 'A Handover You Can Live With', desc: 'Architecture notes, runbooks, a record of the decisions we made and why, and walkthroughs with your engineers. We aim for the day your team says it no longer needs us, and we plan the handover from week one.'},
      {icon: 'ti-calendar-time', title: 'Weekly Shipping Cadence', desc: 'Something working goes to your team every week, with a short note on what changed and what comes next. You can stop, redirect, or speed up at any point, because you always know where the project stands.'},
      {icon: 'ti-shield-lock', title: 'Works Inside Your Perimeter', desc: 'We work on your infrastructure and under your access rules, including SSO through SAML or OIDC, so sensitive data stays inside your environment. We follow your change-approval and compliance steps instead of asking you to bend them.'}
    ] : [
      {icon: 'ti-users', title: 'Your Team, Your Tools, Your Office', desc: 'วิศวกรของเราเข้าแชต Issue Tracker Repository และ Standup ของคุณ ทั้งที่ออฟฟิศหรือทางไกล ทำตามกฎการแตก Branch และขั้นตอนรีวิวของคุณ งานของพวกเขาจึงดูเหมือนเป็นส่วนหนึ่งของทีมคุณตั้งแต่วันแรก'},
      {icon: 'ti-rocket', title: 'AI That Reaches Production', desc: 'เราสร้างระบบ AI ให้มี Log การประเมินผล ทางสำรอง และการควบคุมสิทธิ์ตั้งแต่ต้น แล้วพาขึ้นระบบจริงและดูแลตอนมันทำงาน เป้าหมายคือระบบที่พนักงานของคุณพึ่งพาได้ทุกวัน ไม่ใช่เดโมที่ว้าวครั้งเดียว'},
      {icon: 'ti-plug-connected', title: 'The Integrations Nobody Wants', desc: 'ซอฟต์แวร์จัดส่งรุ่นเก่า API ภายในที่ไม่มีเอกสาร และข้อมูลที่กระจายอยู่หลายระบบ เราไล่ดูว่ามันทำงานยังไงจากโค้ด Log และการคุยกับคนที่ดูแลอยู่ แล้วเชื่อมโดยมี Test ครอบทุกจุดเชื่อม'},
      {icon: 'ti-file-check', title: 'A Handover You Can Live With', desc: 'บันทึกสถาปัตยกรรม Runbook บันทึกการตัดสินใจพร้อมเหตุผล และการพาวิศวกรของคุณเดินดูงาน เป้าหมายของเราคือวันที่ทีมคุณบอกว่าไม่ต้องใช้เราแล้ว และเราวางแผนการส่งมอบตั้งแต่สัปดาห์แรก'},
      {icon: 'ti-calendar-time', title: 'Weekly Shipping Cadence', desc: 'ทุกสัปดาห์ทีมคุณได้รับของที่ใช้งานได้ พร้อมโน้ตสั้นๆ ว่าอะไรเปลี่ยนและขั้นต่อไปคืออะไร คุณจะหยุด เปลี่ยนทิศทาง หรือเร่งตอนไหนก็ได้ เพราะรู้เสมอว่าโปรเจกต์อยู่ตรงไหน'},
      {icon: 'ti-shield-lock', title: 'Works Inside Your Perimeter', desc: 'เราทำงานบนโครงสร้างพื้นฐานและภายใต้กฎการเข้าถึงของคุณ รวมถึง SSO ผ่าน SAML หรือ OIDC ข้อมูลสำคัญจึงอยู่ในสภาพแวดล้อมของคุณ เราทำตามขั้นตอนอนุมัติการเปลี่ยนแปลงและกฎระเบียบของคุณ ไม่ขอให้คุณยืดหยุ่นให้เรา'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Scope the Mission', desc: 'We spend a call or two with your sponsor and tech lead to define the problem, the systems involved, the rules we must follow, and how you will judge success. The output is a one-page mission brief that everyone signs off.'},
      {no: '02', title: 'Meet Your Engineers', desc: 'We pick senior engineers whose experience matches your stack and your problem, and introduce them to your team before the start. You meet the people, not a sales deck.'},
      {no: '03', title: 'Embed in Week One', desc: 'In the first days the engineers get access, set up their environments, read the code, and join your standups. They aim to land a first small change in production within the week.'},
      {no: '04', title: 'Ship Every Week', desc: 'We release a working increment weekly and review it with your team. What we learn each week feeds the next, so the plan follows reality instead of a document written at the start.'},
      {no: '05', title: 'Harden for Production', desc: 'Before go-live we work on security review, load behaviour, monitoring, failure handling, and rollback. For AI features, that includes evaluating output quality on your real data.'},
      {no: '06', title: 'Hand Over or Extend', desc: 'We deliver the documentation and walk your engineers through it. You can then take over fully, keep a smaller team with us, or give us the next mission.'}
    ] : [
      {no: '01', title: 'Scope the Mission', desc: 'เราใช้เวลาคุยหนึ่งถึงสองรอบกับผู้สนับสนุนโครงการและ Tech Lead ของคุณ เพื่อกำหนดปัญหา ระบบที่เกี่ยวข้อง กฎที่ต้องทำตาม และวิธีที่คุณจะวัดความสำเร็จ ได้เอกสารภารกิจหนึ่งหน้าที่ทุกคนเห็นชอบ'},
      {no: '02', title: 'Meet Your Engineers', desc: 'เราเลือกวิศวกรอาวุโสที่ประสบการณ์ตรงกับเทคโนโลยีและโจทย์ของคุณ และแนะนำให้ทีมคุณรู้จักก่อนเริ่มงาน คุณจะได้พบตัวคน ไม่ใช่แค่สไลด์ขาย'},
      {no: '03', title: 'Embed in Week One', desc: 'ไม่กี่วันแรก วิศวกรขอสิทธิ์เข้าถึง ตั้งสภาพแวดล้อมทำงาน อ่านโค้ด และเข้า Standup ของคุณ เป้าหมายคือให้การเปลี่ยนแปลงเล็กๆ ชิ้นแรกขึ้นระบบจริงภายในสัปดาห์นั้น'},
      {no: '04', title: 'Ship Every Week', desc: 'เราปล่อยงานที่ใช้ได้ทุกสัปดาห์และรีวิวกับทีมคุณ สิ่งที่เรียนรู้ในแต่ละสัปดาห์ป้อนเข้าสัปดาห์ถัดไป แผนจึงตามความจริง ไม่ใช่เอกสารที่เขียนไว้ตอนเริ่ม'},
      {no: '05', title: 'Harden for Production', desc: 'ก่อนขึ้นระบบจริง เราทำเรื่องรีวิวความปลอดภัย พฤติกรรมตอนโหลดสูง Monitoring การรับมือเมื่อระบบล้ม และแผนย้อนกลับ สำหรับฟีเจอร์ AI รวมถึงประเมินคุณภาพของผลลัพธ์บนข้อมูลจริงของคุณ'},
      {no: '06', title: 'Hand Over or Extend', desc: 'เราส่งเอกสารและพาวิศวกรของคุณเดินดูทั้งหมด จากนั้นคุณจะรับช่วงเองเต็มตัว เก็บทีมเล็กๆ ของเราไว้ต่อ หรือให้ภารกิจถัดไปกับเราก็ได้'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'AI System Reached Production in 6 Weeks', desc: 'An embedded team shipped weekly and connected the AI system to 4 legacy internal systems. By month six the client’s own engineers ran it without us.', result: 'Zero handover dependency after 6 months'},
      {tag: 'Logistics · Nationwide', title: 'Legacy Integration Nobody Else Would Touch', desc: 'We integrated directly with a 15-year-old dispatch system through undocumented APIs, working out its behaviour from code and logs.', result: '15+ systems connected successfully'},
      {tag: 'Enterprise SaaS · Bangkok', title: 'SSO & Compliance Work Inside Client Perimeter', desc: 'Engineers worked entirely within the client’s security boundary using SAML and OIDC, so no data was copied out to our side.', result: 'Zero data left client infrastructure'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ระบบ AI ใช้งานจริงภายใน 6 สัปดาห์', desc: 'ทีมที่ฝังตัวส่งงานรายสัปดาห์ และเชื่อมระบบ AI กับระบบภายในเดิม 4 ระบบ พอเดือนที่หก วิศวกรของลูกค้าเองก็ดูแลได้โดยไม่ต้องมีเรา', result: 'ไม่ต้องพึ่งทีมเราหลังผ่านไป 6 เดือน'},
      {tag: 'Logistics · ทั่วประเทศ', title: 'เชื่อมต่อระบบเดิมที่ไม่มีใครอยากแตะ', desc: 'เราเชื่อมโดยตรงกับระบบจัดส่งอายุ 15 ปี ผ่าน API ที่ไม่มีเอกสาร โดยไล่ดูพฤติกรรมของมันจากโค้ดและ Log', result: 'เชื่อมต่อสำเร็จมากกว่า 15 ระบบ'},
      {tag: 'Enterprise SaaS · กรุงเทพฯ', title: 'ทำงาน SSO และด้านกฎระเบียบภายในระบบของลูกค้า', desc: 'วิศวกรทำงานทั้งหมดภายในขอบเขตความปลอดภัยของลูกค้าด้วย SAML และ OIDC จึงไม่มีข้อมูลถูกคัดลอกออกมาฝั่งเรา', result: 'ไม่มีข้อมูลออกจากระบบของลูกค้า'}
    ]
  const faqs        = isEN ? [
      {q: 'How is this different from a typical outsourced project?', a: 'Our engineers work inside your tools, repositories, and standups and release weekly. You see the work as it happens instead of waiting months for a delivery that may miss the point.'},
      {q: 'Can you work inside our security perimeter?', a: 'Yes. We regularly work entirely within client infrastructure and security boundaries, including SSO through SAML or OIDC, and sensitive data does not need to leave your environment.'},
      {q: 'What happens after the engagement ends?', a: 'You get a documented handover covering architecture, runbooks, and decisions, plus walkthroughs with your engineers, so your team can run and extend the system without us.'},
      {q: 'What kind of integrations do you typically handle?', a: 'Legacy systems, internal APIs with no documentation, and messy or inconsistent data sources, the work other vendors tend to avoid or under-quote.'},
      {q: 'How big is the team you embed?', a: 'It depends on the mission. Many engagements start with one or two engineers and grow only if the work needs it. We recommend a team shape after the scoping call.'},
      {q: 'Do your engineers have to be on site?', a: 'No. We work at your office, remotely, or a mix of both, whichever suits your security rules and your team. The common point is that they join your daily routines.'},
      {q: 'What do you need from us before we start?', a: 'A named sponsor, a technical contact, access to the repositories and environments involved, and a description of the systems and rules that apply. We help you prepare the access request during scoping.'}
    ] : [
      {q: 'ต่างจากโปรเจกต์ Outsource ทั่วไปยังไง?', a: 'วิศวกรของเราทำงานอยู่ในเครื่องมือ Repository และ Standup ของคุณ และปล่อยงานทุกสัปดาห์ คุณเห็นงานตอนที่มันเกิดขึ้น ไม่ต้องรอหลายเดือนแล้วได้ของที่อาจไม่ตรงประเด็น'},
      {q: 'ทำงานภายในระบบความปลอดภัยของเราได้ไหม?', a: 'ได้ เราทำงานภายในโครงสร้างพื้นฐานและขอบเขตความปลอดภัยของลูกค้าเป็นประจำ รวมถึง SSO ผ่าน SAML หรือ OIDC ข้อมูลสำคัญไม่ต้องออกจากสภาพแวดล้อมของคุณ'},
      {q: 'หลังจบโครงการแล้วจะเกิดอะไรขึ้น?', a: 'คุณจะได้เอกสารส่งมอบที่ครอบคลุม Architecture, Runbook และการตัดสินใจต่างๆ พร้อมการพาวิศวกรของคุณเดินดูงาน ทีมคุณจะดูแลและต่อยอดระบบได้เองโดยไม่ต้องมีเรา'},
      {q: 'มักจัดการงานเชื่อมต่อแบบไหนบ้าง?', a: 'ระบบเก่า API ภายในที่ไม่มีเอกสาร และแหล่งข้อมูลที่ยุ่งหรือไม่สม่ำเสมอ ซึ่งเป็นงานที่เจ้าอื่นมักเลี่ยงหรือประเมินต่ำเกินไป'},
      {q: 'ทีมที่ส่งเข้าไปมีขนาดเท่าไหร่?', a: 'ขึ้นอยู่กับภารกิจ หลายโครงการเริ่มด้วยวิศวกรหนึ่งถึงสองคน และขยายก็ต่อเมื่องานต้องการ เราจะเสนอหน้าตาทีมที่เหมาะหลังคุยเรื่องขอบเขต'},
      {q: 'วิศวกรต้องมานั่งที่ออฟฟิศเราไหม?', a: 'ไม่จำเป็น เราทำงานที่ออฟฟิศคุณ ทางไกล หรือผสมกันก็ได้ ตามกฎความปลอดภัยและความสะดวกของทีมคุณ จุดร่วมคือพวกเขาเข้าร่วมกิจวัตรประจำวันของคุณ'},
      {q: 'ต้องเตรียมอะไรให้เราก่อนเริ่ม?', a: 'ผู้สนับสนุนโครงการที่ระบุตัวได้ ผู้ติดต่อฝั่งเทคนิค สิทธิ์เข้าถึง Repository และสภาพแวดล้อมที่เกี่ยวข้อง และคำอธิบายระบบกับกฎที่ต้องทำตาม เราช่วยเตรียมคำขอสิทธิ์ตอนคุยเรื่องขอบเขต'}
    ]
  const related     = isEN ? [
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'}
    ] : [
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'}
    ]

  const fdeLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>embed --team senior-engineers --week 1</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Joined repos, standups, tools' : 'เข้าร่วม Repo, Standup และเครื่องมือแล้ว'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>integrate --system legacy-dispatch</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '15-year-old system connected' : 'เชื่อมต่อระบบอายุ 15 ปีสำเร็จ'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>handover --docs runbooks,architecture</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Team can maintain independently' : 'ทีมดูแลต่อได้เอง'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>embed-log.sh</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {fdeLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgb(var(--fg) / 0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="theme-dark absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgb(var(--fg) / 0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Delivery Cadence' : 'Delivery Cadence'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h4l3-8 4 16 3-8h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '90%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'First increment shipped in week 1' : 'ส่งงานแรกภายในสัปดาห์แรก'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-users', title: 'Your Team, Your Tools, Your Office', desc: 'Engineers who join your chat, tracker, repositories, and standup, at your office or remotely, and follow your branching and review rules.' },
    { icon: 'ti-rocket', title: 'AI That Reaches Production', desc: 'AI systems built with logging, evaluation, fallbacks, and access control, then taken live and watched while they run.' },
    { icon: 'ti-plug-connected', title: 'The Integrations Nobody Wants', desc: 'Old dispatch software, undocumented internal APIs, and scattered data, connected with tests around every link.' },
    { icon: 'ti-file-check', title: 'A Handover You Can Live With', desc: 'Architecture notes, runbooks, recorded decisions, and walkthroughs, planned from week one so your team can take over.' },
    { icon: 'ti-calendar-time', title: 'Weekly Shipping Cadence', desc: 'A working release each week with a short note on what changed, so you always know where the project stands and can redirect it.' },
    { icon: 'ti-shield-lock', title: 'Works Inside Your Perimeter', desc: 'Your infrastructure, your access rules, SSO via SAML or OIDC, and your compliance steps, with sensitive data kept inside your environment.' },
  ] : [
    { icon: 'ti-users', title: 'Your Team, Your Tools, Your Office', desc: 'วิศวกรที่เข้าแชต Tracker Repository และ Standup ของคุณ ทั้งที่ออฟฟิศหรือทางไกล และทำตามกฎการแตก Branch กับรีวิวของคุณ' },
    { icon: 'ti-rocket', title: 'AI That Reaches Production', desc: 'ระบบ AI ที่สร้างพร้อม Log การประเมินผล ทางสำรอง และการควบคุมสิทธิ์ แล้วพาขึ้นระบบจริงและเฝ้าดูตอนทำงาน' },
    { icon: 'ti-plug-connected', title: 'The Integrations Nobody Wants', desc: 'ซอฟต์แวร์จัดส่งรุ่นเก่า API ภายในที่ไม่มีเอกสาร และข้อมูลที่กระจัดกระจาย เชื่อมโดยมี Test ครอบทุกจุดเชื่อม' },
    { icon: 'ti-file-check', title: 'A Handover You Can Live With', desc: 'บันทึกสถาปัตยกรรม Runbook บันทึกการตัดสินใจ และการเดินดูงาน วางแผนตั้งแต่สัปดาห์แรกให้ทีมคุณรับช่วงต่อได้' },
    { icon: 'ti-calendar-time', title: 'Weekly Shipping Cadence', desc: 'ปล่อยงานที่ใช้ได้ทุกสัปดาห์ พร้อมโน้ตสั้นๆ ว่าอะไรเปลี่ยน คุณรู้เสมอว่าโปรเจกต์อยู่ตรงไหนและเปลี่ยนทิศทางได้' },
    { icon: 'ti-shield-lock', title: 'Works Inside Your Perimeter', desc: 'โครงสร้างพื้นฐานของคุณ กฎการเข้าถึงของคุณ SSO ผ่าน SAML หรือ OIDC และขั้นตอนตามกฎระเบียบของคุณ โดยข้อมูลสำคัญอยู่ในสภาพแวดล้อมของคุณ' },
  ]

  const techStack = [
    { label: 'Anthropic Claude', svg: 'claude' },
    { label: 'OpenAI', icon: 'ti-brand-openai' },
    { label: 'Python', svg: 'python' },
    { label: 'TypeScript', svg: 'typescript' },
    { label: 'Next.js', svg: 'nextdotjs' },
    { label: 'PostgreSQL', svg: 'postgresql' },
    { label: 'Apache Kafka', svg: 'apachekafka' },
    { label: 'REST & GraphQL APIs', svg: 'graphql' },
    { label: 'AWS', icon: 'ti-brand-aws' },
    { label: 'Google Cloud', icon: 'ti-cloud' },
    { label: 'Azure', icon: 'ti-brand-azure' },
    { label: 'Kubernetes', svg: 'kubernetes' },
    { label: 'Terraform', svg: 'terraform' },
    { label: 'SSO (SAML/OIDC)', icon: 'ti-lock-access' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Scope the Mission', desc: 'Problem, systems, rules, and success measures in a one-page brief' },
    { no: '02', title: 'Meet Your Engineers', desc: 'Senior engineers matched to your stack, introduced before day one' },
    { no: '03', title: 'Embed in Week One', desc: 'Access, environments, standups, and a first small production change' },
    { no: '04', title: 'Ship Every Week', desc: 'A working increment reviewed with your team' },
    { no: '05', title: 'Harden for Production', desc: 'Security review, monitoring, failure handling, rollback' },
    { no: '06', title: 'Hand Over or Extend', desc: 'Documentation, walkthroughs, and a choice of what comes next' },
  ] : [
    { no: '01', title: 'Scope the Mission', desc: 'ปัญหา ระบบ กฎ และตัวชี้วัดความสำเร็จ ในเอกสารหนึ่งหน้า' },
    { no: '02', title: 'Meet Your Engineers', desc: 'วิศวกรอาวุโสที่ตรงกับเทคโนโลยีของคุณ แนะนำก่อนวันแรก' },
    { no: '03', title: 'Embed in Week One', desc: 'สิทธิ์เข้าถึง สภาพแวดล้อม Standup และการเปลี่ยนเล็กๆ ชิ้นแรกบนระบบจริง' },
    { no: '04', title: 'Ship Every Week', desc: 'งานที่ใช้ได้ทุกสัปดาห์ รีวิวร่วมกับทีมคุณ' },
    { no: '05', title: 'Harden for Production', desc: 'รีวิวความปลอดภัย Monitoring การรับมือเมื่อล้ม และแผนย้อนกลับ' },
    { no: '06', title: 'Hand Over or Extend', desc: 'เอกสาร การเดินดูงาน และทางเลือกว่าจะไปต่อยังไง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'How is forward-deployed engineering different from a typical outsourced project?', a: 'Our engineers work inside your tools, repositories, and standups, not from a distance against a fixed spec. That means a working release each week that your team can see and react to, rather than months of silence followed by something that misses the mark.' },
    { q: 'Can you work inside our security perimeter?', a: 'Yes. We regularly work entirely within client infrastructure and security boundaries, including SSO integration via SAML or OIDC, without moving sensitive data outside your environment. We follow your access and change-approval process as it is.' },
    { q: 'What happens after the engagement ends?', a: 'You receive a documented handover covering architecture decisions, runbooks, and operating guidance, plus walkthroughs with your engineers. Your team can then maintain and extend the system without keeping us on standby.' },
    { q: 'What kind of integrations do you typically handle?', a: 'Legacy systems, undocumented internal APIs, and messy or inconsistent data sources, the kind of integration work that other vendors tend to avoid or under-scope.' },
    { q: 'How long does a typical engagement run?', a: 'Engagements are scoped around a mission rather than a fixed calendar length. A focused integration project might run 6-8 weeks. A broader embedded engagement that builds and hardens a full AI system often runs 3-6 months.' },
    { q: 'How is a forward-deployed engagement priced?', a: 'Pricing is based on team composition and engagement length rather than a single project fee, because scope sharpens as the mission is defined. We share a clear rate structure after the scoping call, so you can budget with confidence.' },
    { q: 'Do we own everything that gets built?', a: 'Yes, entirely. All code, infrastructure configuration, and documentation belong to you. There is no vendor lock-in and no dependency on proprietary tools that we control.' },
    { q: 'Can the engagement scale up or down as our needs change?', a: 'Yes. The team can change as the mission evolves: adding a specialist for one integration, or shrinking once the system is stable and your own team is ready to take over.' },
    { q: 'Do your engineers have to be on site?', a: 'No. They can work at your office, remotely, or a mix, depending on your security rules and what suits your team. What matters is that they join your standups and use your tools every day.' },
    { q: 'What do you need from us to get started?', a: 'A named sponsor, a technical contact, access to the repositories and environments involved, and a description of the systems and rules that apply. During scoping we help you prepare the access requests, which are often the slowest part.' },
  ] : [
    { q: 'Forward-Deployed Engineering ต่างจากโปรเจกต์ Outsource ทั่วไปยังไง?', a: 'วิศวกรของเราทำงานอยู่ในเครื่องมือ Repository และ Standup ของคุณ ไม่ใช่ทำจากระยะไกลตามสเปกตายตัว หมายถึงมีงานที่ใช้ได้ออกมาทุกสัปดาห์ให้ทีมคุณดูและปรับได้ แทนที่จะเงียบไปหลายเดือนแล้วได้ของที่ไม่ตรงเป้า' },
    { q: 'ทำงานภายในระบบความปลอดภัยของเราได้ไหม?', a: 'ได้ เราทำงานภายในโครงสร้างพื้นฐานและขอบเขตความปลอดภัยของลูกค้าเป็นประจำ รวมถึงการเชื่อม SSO ผ่าน SAML หรือ OIDC โดยไม่ต้องย้ายข้อมูลสำคัญออกนอกสภาพแวดล้อมของคุณ เราทำตามขั้นตอนขอสิทธิ์และอนุมัติการเปลี่ยนแปลงของคุณตามที่เป็นอยู่' },
    { q: 'หลังจบโครงการแล้วจะเกิดอะไรขึ้น?', a: 'คุณจะได้เอกสารส่งมอบที่ครอบคลุมการตัดสินใจด้าน Architecture, Runbook และคำแนะนำการดูแลระบบ พร้อมการพาวิศวกรของคุณเดินดูงาน ทีมคุณดูแลและต่อยอดระบบได้เอง โดยไม่ต้องให้เราสแตนด์บายตลอด' },
    { q: 'มักจัดการงานเชื่อมต่อแบบไหนบ้าง?', a: 'ระบบเก่า API ภายในที่ไม่มีเอกสาร และแหล่งข้อมูลที่ยุ่งหรือไม่สม่ำเสมอ ซึ่งเป็นงานเชื่อมต่อที่เจ้าอื่นมักเลี่ยงหรือประเมินขอบเขตต่ำเกินไป' },
    { q: 'โครงการทั่วไปใช้เวลานานแค่ไหน?', a: 'กำหนดตามภารกิจ ไม่ใช่ระยะเวลาตายตัว โปรเจกต์เชื่อมต่อเฉพาะจุดอาจใช้ 6-8 สัปดาห์ ส่วนโครงการที่ฝังทีมเข้าไปในวงกว้างเพื่อสร้างและทำให้ระบบ AI เต็มรูปแบบพร้อมใช้งาน มักใช้ 3-6 เดือน' },
    { q: 'Forward-Deployed Engineering คิดราคายังไง?', a: 'คิดตามองค์ประกอบของทีมและระยะเวลา มากกว่าเป็นค่าโปรเจกต์ก้อนเดียว เพราะขอบเขตจะชัดขึ้นเมื่อกำหนดภารกิจแล้ว เราแจ้งโครงสร้างราคาที่ชัดเจนหลังคุยเรื่องขอบเขต คุณจะวางงบได้อย่างมั่นใจ' },
    { q: 'เราเป็นเจ้าของทุกอย่างที่สร้างขึ้นไหม?', a: 'ใช่ เป็นเจ้าของทั้งหมด ทั้งโค้ด การตั้งค่าโครงสร้างพื้นฐาน และเอกสาร ไม่ผูกติดผู้รับเหมา และไม่ต้องพึ่งเครื่องมือเฉพาะที่เราควบคุมไว้' },
    { q: 'ปรับขนาดโครงการขึ้นลงตามความต้องการที่เปลี่ยนไปได้ไหม?', a: 'ได้ ปรับทีมตามภารกิจที่เปลี่ยนไปได้ เช่น เพิ่มผู้เชี่ยวชาญสำหรับงานเชื่อมต่อชิ้นหนึ่ง หรือลดขนาดลงเมื่อระบบนิ่งและทีมคุณพร้อมรับช่วง' },
    { q: 'วิศวกรต้องมานั่งที่ออฟฟิศเราไหม?', a: 'ไม่จำเป็น ทำงานที่ออฟฟิศคุณ ทางไกล หรือผสมกันก็ได้ ตามกฎความปลอดภัยและความเหมาะสมของทีมคุณ สิ่งสำคัญคือพวกเขาเข้า Standup และใช้เครื่องมือของคุณทุกวัน' },
    { q: 'ต้องเตรียมอะไรให้เราก่อนเริ่ม?', a: 'ผู้สนับสนุนโครงการที่ระบุตัวได้ ผู้ติดต่อฝั่งเทคนิค สิทธิ์เข้าถึง Repository และสภาพแวดล้อมที่เกี่ยวข้อง และคำอธิบายระบบกับกฎที่ใช้อยู่ ตอนคุยเรื่องขอบเขตเราช่วยเตรียมคำขอสิทธิ์ ซึ่งมักเป็นส่วนที่ช้าที่สุด' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'สิ่งที่เราทำได้จริงในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                  <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A broad, production-grade stack we adapt to whatever your organization already runs.'
              : 'Stack ระดับ Production ที่หลากหลาย ปรับให้เข้ากับสิ่งที่องค์กรคุณใช้อยู่แล้ว'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.08)', color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from scoping to a shipped, handed-over system — adjusted per mission, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการกำหนดขอบเขตสู่ระบบที่ส่งมอบแล้ว ปรับตามแต่ละภารกิจ ไม่ใช่สูตรสำเร็จ'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about how forward-deployed engagements work.' : 'คำตอบตรงๆ เรื่องวิธีที่เราทำงานแบบ Forward-Deployed'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.5) 1px, transparent 1px), radial-gradient(rgb(var(--fg) / 0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
        <h2 className="t-display mb-5 leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีฟังว่าคุณกำลังสร้างอะไรอยู่'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกัน'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/forward-deployed-engineering/why1.jpg"
      whyImg2="/images/services/forward-deployed-engineering/why2.jpg"
      featureImg="/images/services/forward-deployed-engineering/feature.jpg"
      processImg="/images/services/forward-deployed-engineering/process.jpg"
    />
  )
}
