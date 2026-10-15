import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
import { alt } from '@/lib/seo'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  cursor: { hex: '#FFFFFF', path: 'M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23' },
  claude: { hex: '#D97757', path: 'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z' },
  v0: { hex: '#FFFFFF', path: 'M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z' },
  replit: { hex: '#F26207', path: 'M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z' },
  nextdotjs: { hex: '#FFFFFF', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  react: { hex: '#61DAFB', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
  typescript: { hex: '#3178C6', path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
  supabase: { hex: '#3FCF8E', path: 'M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z' },
  firebase: { hex: '#DD2C00', path: 'M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z' },
  postgresql: { hex: '#4169E1', path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z' },
  stripe: { hex: '#635BFF', path: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z' },
  vercel: { hex: '#FFFFFF', path: 'm12 1.608 12 20.784H0Z' },
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
    ? 'Finish Your AI-Built App | Vibe Code Rescue | Haliviq'
    : 'ช่วยจบแอปที่สร้างด้วย AI ให้พร้อมเปิดตัว | Haliviq'
  const description = isEN
    ? 'Built an app with Cursor, Lovable, Bolt or Replit? Haliviq in Bangkok audits the code, fixes security gaps, sets up real hosting and finishes the last 10%.'
    : 'สร้างแอปด้วย Cursor, Lovable, Bolt หรือ Replit แล้วติดที่ 10% สุดท้าย Haliviq ตรวจโค้ด แก้ช่องโหว่ ขึ้น Hosting จริง และช่วยจบจนพร้อมเปิดตัว ไม่ต้องเขียนใหม่'
  const url = `https://www.haliviq.com/${params.lang}/services/finish-your-vibe-coded-app`
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

  const badge    = isEN ? 'Engineering / Vibe-Coded Apps'  : 'Engineering / Vibe-Coded Apps'
  const title    = isEN ? 'You Built 90%'  : 'คุณสร้างมาแล้ว 90%'
  const subtitle = isEN ? 'We Handle the Last 10%'    : 'เราช่วยจบอีก 10% ที่เหลือ'
  const heroDesc = isEN ? 'You used an AI tool to get an app running, and now it has to survive real users, real payments, and real attackers. We read through the code your tool produced, fix what is unsafe, put the app on proper hosting with backups and monitoring, and finish the unglamorous details that block a launch. You keep what you built; we do not start over. It is made for founders, small teams, and in-house staff who are close to launch but not sure it is ready.'  : 'คุณใช้เครื่องมือ AI สร้างแอปจนรันได้แล้ว ตอนนี้แอปต้องรอดจากผู้ใช้จริง เงินจริง และคนที่คิดร้ายจริงๆ เราอ่านโค้ดที่เครื่องมือของคุณสร้างไว้ แก้จุดที่ไม่ปลอดภัย ย้ายแอปขึ้น Hosting ที่ดูแลได้ พร้อม Backup และ Monitoring แล้วทำรายละเอียดจุกจิกที่ขวางการเปิดตัวให้เสร็จ สิ่งที่คุณสร้างไว้ยังเป็นของคุณ เราไม่เริ่มใหม่ เหมาะกับผู้ก่อตั้ง ทีมเล็ก และทีมในองค์กรที่ใกล้เปิดตัวแล้วแต่ยังไม่มั่นใจว่าพร้อม'
  const whyTitle = isEN ? 'Why AI-generated apps stall before launch'    : 'ทำไมแอปที่สร้างด้วย AI ถึงติดขัดก่อนเปิดตัว'
  const whyDesc  = isEN ? 'Cursor, Lovable, Bolt, and similar tools are very good at producing something that works on your laptop. They are not asked to think about who can read another user’s data, what happens when a payment webhook arrives twice, or how to restore the database after a mistake. Those gaps stay invisible while three people are testing. They show up the week real customers arrive, which is the worst possible time to find them.'  : 'Cursor, Lovable, Bolt และเครื่องมือแนวเดียวกัน เก่งมากเรื่องสร้างของที่รันได้บนเครื่องคุณ แต่ไม่มีใครบอกให้มันคิดเรื่องว่าใครอ่านข้อมูลของผู้ใช้คนอื่นได้ จะเกิดอะไรขึ้นถ้า Webhook ชำระเงินเข้ามาสองรอบ หรือจะกู้ฐานข้อมูลกลับมาอย่างไรถ้าพลาด ช่องว่างเหล่านี้มองไม่เห็นตอนที่มีคนทดสอบแค่สามคน แต่จะโผล่ในสัปดาห์ที่ลูกค้าจริงเข้ามา ซึ่งเป็นเวลาที่แย่ที่สุดที่จะมาพบ'
  const ctaTitle = isEN ? 'Ready to ship what you’ve built?'    : 'พร้อมปล่อยสิ่งที่คุณสร้างมาแล้วหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a fixed-price codebase audit. Send us the repository and we will tell you plainly what stands between your prototype and production, in what order to fix it, and roughly what it will take.'   : 'เริ่มจากการตรวจ Codebase แบบราคาคงที่ ส่ง Repository มาให้เรา แล้วเราจะบอกตรงๆ ว่าอะไรยังขวางระหว่าง Prototype กับการใช้งานจริง ควรแก้ตามลำดับไหน และต้องใช้แรงประมาณเท่าไหร่'
  const overviewText = isEN
    ? 'We take apps built with AI assistance, the so-called "vibe-coded" kind from Cursor, Claude Code, Lovable, Bolt, v0, or Replit, and do the work production needs. First comes an audit of the codebase and architecture, so we know what is really in there. Then security fixes for the gaps AI tools often leave open, proper hosting in place of a preview deployment, and hands-on work through the last 10%: login edge cases, payments that never double-charge, sensible error handling, and the small details that separate a demo from a product people rely on.'
    : 'เรารับช่วงต่อแอปที่สร้างด้วย AI แบบ "Vibe Coding" จาก Cursor, Claude Code, Lovable, Bolt, v0 หรือ Replit แล้วทำส่วนที่การใช้งานจริงต้องมี เริ่มจากตรวจ Codebase และสถาปัตยกรรม เพื่อรู้ว่าข้างในมีอะไรอยู่จริง จากนั้นแก้ช่องโหว่ที่เครื่องมือ AI มักเปิดทิ้งไว้ ย้ายไปใช้ Hosting จริงแทนการ Deploy แบบทดลอง และลงมือทำ "10% สุดท้าย" ทั้งกรณีพิเศษของระบบล็อกอิน การชำระเงินที่ไม่ตัดเงินซ้ำ การจัดการ Error ที่สมเหตุสมผล และรายละเอียดเล็กๆ ที่แยกเดโมออกจากผลิตภัณฑ์ที่คนพึ่งพาได้'

  const heroBullets = isEN ? [
      'A full codebase and architecture audit before anything is changed',
      'Security fixes for login, secrets, and data that should not be reachable',
      'Real hosting with backups, monitoring, and a deploy process, not a preview link',
      'Hands-on fixes for the payment, login, and error cases AI-written code misses',
      'Works on code from any major AI tool, and on repositories you started by hand',
      'A written handover so your team understands the code and can change it without us',
    ] : [
      'ตรวจ Codebase และสถาปัตยกรรมทั้งหมดก่อนแก้อะไรทั้งนั้น',
      'แก้จุดอ่อนด้านความปลอดภัยของระบบล็อกอิน Secret และข้อมูลที่ไม่ควรเข้าถึงได้',
      'ขึ้น Hosting จริง พร้อม Backup, Monitoring และขั้นตอน Deploy ไม่ใช่แค่ลิงก์ทดลอง',
      'ลงมือแก้กรณีของการชำระเงิน ระบบล็อกอิน และ Error ที่โค้ดจาก AI มักพลาด',
      'ทำงานกับโค้ดจากเครื่องมือ AI ชั้นนำได้ทุกตัว รวมถึง Repository ที่เริ่มด้วยมือ',
      'ส่งมอบเอกสารให้ทีมคุณเข้าใจโค้ดและแก้ต่อเองได้โดยไม่ต้องพึ่งเรา',
    ]
  const whyPoints   = isEN ? [
      'AI coding tools aim for a working demo, not for what survives heavy use and people actively probing for weaknesses.',
      'Exposed keys, missing permission checks, and open endpoints are very common in AI-generated code, and they are easy to miss by eye.',
      'A preview deployment is not production: it has no backups, no alerts, and no plan for more users.',
      'Payment, login, and data edge cases only surface once real users start doing unexpected things.',
      'Finishing the last 10% properly costs far less than a data leak or an outage right after launch.',
    ] : [
      'เครื่องมือ AI Coding ตั้งเป้าที่เดโมที่ใช้งานได้ ไม่ใช่สิ่งที่ทนการใช้งานหนักและคนที่ลองหาจุดอ่อนจริงๆ',
      'Key รั่ว ไม่มีการเช็กสิทธิ์ และ Endpoint เปิดโล่ง พบได้บ่อยมากในโค้ดจาก AI และมองด้วยตาเปล่าแล้วหลุดง่าย',
      'การ Deploy แบบทดลองไม่ใช่ Production ไม่มี Backup ไม่มีการแจ้งเตือน และไม่มีแผนรองรับผู้ใช้ที่เพิ่มขึ้น',
      'กรณีพิเศษของการชำระเงิน ระบบล็อกอิน และข้อมูล จะโผล่ตอนที่ผู้ใช้จริงเริ่มทำอะไรที่ไม่คาดคิด',
      'จบ 10% สุดท้ายให้ดี ถูกกว่าข้อมูลรั่วหรือระบบล่มหลังเปิดตัวมาก',
    ]
  const outcomes    = isEN ? [
      {stat: '15+', label: 'Security Issues Found', desc: 'Average per audited codebase'},
      {stat: '<3wk', label: 'Typical Time to Launch', desc: 'From audit to production-ready'},
      {stat: '100%', label: 'Codebases Ownable', desc: 'Full understanding, no black box'},
      {stat: '0', label: 'Rewrites Required', desc: 'We build on what exists'}
    ] : [
      {stat: '15+', label: 'ปัญหาด้านความปลอดภัยที่พบ', desc: 'เฉลี่ยต่อ Codebase ที่ตรวจ'},
      {stat: '<3wk', label: 'เวลาถึงวันเปิดตัว', desc: 'ตั้งแต่ตรวจจนพร้อมใช้งานจริง'},
      {stat: '100%', label: 'เข้าใจ Codebase ได้เต็มที่', desc: 'ไม่มีส่วนไหนเป็นกล่องดำ'},
      {stat: '0', label: 'ต้องเขียนใหม่ทั้งหมด', desc: 'เราต่อยอดจากของเดิม'}
    ]
  const features    = isEN ? [
      {icon: 'ti-search-code', title: 'Codebase & Architecture Audit', desc: 'We read the whole repository and map how it is put together: data model, auth flow, third-party services, and environment setup. You get a ranked list of problems with a plain explanation of each, and a fixed-price quote for fixing them.'},
      {icon: 'ti-shield-lock', title: 'Security Hardening', desc: 'We close the gaps that turn up again and again in AI-written apps: keys committed to the repo, endpoints with no permission check, database rules that let any user read any row, and unchecked form input. Fixes are tested, not just patched.'},
      {icon: 'ti-server', title: 'Production Infrastructure', desc: 'We move the app from a preview link to hosting you can depend on, with separate staging and production, automatic backups, error alerts, a deploy pipeline, and a domain with HTTPS. We can use a Thai or regional provider if data location matters to you.'},
      {icon: 'ti-list-check', title: 'The Last 10%', desc: 'The jobs that stop a launch: password reset that really works, payments that handle retries and failures, sensible empty and error states, email that lands in the inbox, and the flows the tool started and never finished.'},
      {icon: 'ti-git-branch', title: 'Codebase Cleanup', desc: 'We remove dead code and duplicated logic, bring the folder structure into line, and add the tests that protect the important flows. The goal is a project a new developer can open on Monday and understand by Wednesday.'},
      {icon: 'ti-headset', title: 'Post-Launch Support', desc: 'After go-live we watch the logs, fix what real users trip over, and help with the first features. Support is optional, billed monthly, and you can end it whenever your team feels ready to carry on alone.'}
    ] : [
      {icon: 'ti-search-code', title: 'Codebase & Architecture Audit', desc: 'เราอ่านทั้ง Repository แล้ววาดว่าระบบประกอบกันอย่างไร ทั้ง Data Model ขั้นตอนล็อกอิน บริการภายนอกที่ใช้ และการตั้งค่า Environment คุณจะได้รายการปัญหาเรียงลำดับพร้อมคำอธิบายที่อ่านรู้เรื่อง และใบเสนอราคาแบบคงที่สำหรับการแก้'},
      {icon: 'ti-shield-lock', title: 'Security Hardening', desc: 'เราปิดช่องโหว่ที่พบซ้ำแล้วซ้ำอีกในแอปที่ AI เขียน เช่น Key ที่หลุดเข้า Repo Endpoint ที่ไม่เช็กสิทธิ์ กฎฐานข้อมูลที่ให้ผู้ใช้คนไหนก็อ่านข้อมูลแถวไหนก็ได้ และข้อมูลจากฟอร์มที่ไม่ได้ตรวจ การแก้ทุกจุดมีการทดสอบ ไม่ใช่แค่ปะๆ ไป'},
      {icon: 'ti-server', title: 'Production Infrastructure', desc: 'เราย้ายแอปจากลิงก์ทดลองไปอยู่บน Hosting ที่พึ่งพาได้ แยก Staging กับ Production มี Backup อัตโนมัติ แจ้งเตือนเมื่อเกิด Error มี Pipeline สำหรับ Deploy และโดเมนที่ใช้ HTTPS ถ้าที่ตั้งของข้อมูลสำคัญกับคุณ เราใช้ผู้ให้บริการในไทยหรือในภูมิภาคได้'},
      {icon: 'ti-list-check', title: 'The Last 10%', desc: 'งานที่ขวางการเปิดตัว เช่น ระบบรีเซ็ตรหัสผ่านที่ใช้ได้จริง การชำระเงินที่รับมือกับการลองใหม่และการล้มเหลว หน้าว่างและหน้า Error ที่สมเหตุสมผล อีเมลที่ไปถึงกล่องจดหมาย และขั้นตอนที่เครื่องมือเริ่มไว้แต่ไม่เคยทำเสร็จ'},
      {icon: 'ti-git-branch', title: 'Codebase Cleanup', desc: 'เราลบโค้ดที่ไม่ใช้และตรรกะซ้ำซ้อน จัดโครงสร้างโฟลเดอร์ให้เป็นระเบียบ และเพิ่ม Test ครอบขั้นตอนสำคัญ เป้าหมายคือโปรเจกต์ที่นักพัฒนาใหม่เปิดวันจันทร์แล้วเข้าใจได้ภายในวันพุธ'},
      {icon: 'ti-headset', title: 'Post-Launch Support', desc: 'หลังเปิดตัว เราดู Log แก้จุดที่ผู้ใช้จริงสะดุด และช่วยทำฟีเจอร์แรกๆ ต่อ การดูแลเป็นทางเลือก เก็บรายเดือน และเลิกได้เมื่อทีมคุณพร้อมไปต่อเอง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit', desc: 'You give us read access to the repository and the services it uses. We go through the code, architecture, secrets, and hosting, and report what we found in plain language, with a fixed price for the audit itself.'},
      {no: '02', title: 'Triage', desc: 'We sort the findings by risk and by whether they block launch. You see what must be fixed now, what can wait a few weeks, and what is only a nice-to-have.'},
      {no: '03', title: 'Harden', desc: 'We fix the security problems first and steady the foundation: secrets rotated, permissions tightened, input checked, dependencies updated. Each fix is tested before we move on.'},
      {no: '04', title: 'Complete', desc: 'We finish the flows the AI left half-done and handle the edge cases, from failed payments to expired sessions, then run through the app as a new user would.'},
      {no: '05', title: 'Launch', desc: 'We move the app to production hosting with backups, monitoring, and a repeatable deploy, and rehearse the release so launch day is uneventful.'},
      {no: '06', title: 'Support', desc: 'We watch the first weeks closely, fix issues real users find, and hand over notes that explain how the app is built. Ongoing support stays optional.'}
    ] : [
      {no: '01', title: 'Audit', desc: 'คุณให้สิทธิ์อ่าน Repository และบริการที่ใช้อยู่ เราไล่ดูโค้ด สถาปัตยกรรม Secret และ Hosting แล้วรายงานสิ่งที่พบด้วยภาษาอ่านง่าย พร้อมราคาคงที่สำหรับงานตรวจเอง'},
      {no: '02', title: 'Triage', desc: 'เราจัดกลุ่มสิ่งที่พบตามความเสี่ยงและว่าขวางการเปิดตัวหรือเปล่า คุณจะเห็นว่าอะไรต้องแก้เดี๋ยวนี้ อะไรรอได้อีกสองสามสัปดาห์ และอะไรแค่มีก็ดี'},
      {no: '03', title: 'Harden', desc: 'เราแก้ปัญหาความปลอดภัยก่อนและทำพื้นฐานให้นิ่ง เปลี่ยน Secret ใหม่ เข้มสิทธิ์ ตรวจข้อมูลขาเข้า และอัปเดต Dependency ทุกจุดที่แก้ทดสอบก่อนไปต่อ'},
      {no: '04', title: 'Complete', desc: 'เราทำขั้นตอนที่ AI ทำค้างไว้ให้เสร็จ และจัดการกรณีพิเศษ ตั้งแต่จ่ายเงินไม่ผ่านไปจนถึง Session หมดอายุ แล้วลองใช้แอปแบบที่ผู้ใช้ใหม่จะใช้'},
      {no: '05', title: 'Launch', desc: 'เราย้ายแอปขึ้น Hosting สำหรับ Production พร้อม Backup, Monitoring และขั้นตอน Deploy ที่ทำซ้ำได้ และซ้อมปล่อยก่อน วันเปิดตัวจะได้เรียบๆ ไม่มีเรื่องวุ่น'},
      {no: '06', title: 'Support', desc: 'เราดูใกล้ชิดในสัปดาห์แรกๆ แก้ปัญหาที่ผู้ใช้จริงพบ และส่งมอบโน้ตอธิบายว่าแอปสร้างอย่างไร ส่วนการดูแลต่อเนื่องเป็นทางเลือก'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS Startup · Bangkok', title: 'Lovable Prototype Hardened & Launched', desc: 'A founder-built Lovable prototype got a security audit, a rebuilt login system, and production hosting, all in 3 weeks.', result: '0 critical vulnerabilities at launch'},
      {tag: 'Marketplace · Bangkok', title: 'Bolt-Built App Made Payment-Ready', desc: 'We hardened the Stripe integration, fixed the failure and retry cases around payments, and moved the app onto real hosting.', result: 'Zero failed transactions post-launch'},
      {tag: 'Internal Tool · Nationwide', title: 'Cursor-Generated Tool Scaled to 200 Users', desc: 'We cleaned up the architecture and rebuilt the infrastructure so a tool written by one person could be rolled out to the whole company.', result: 'Scaled from prototype to 200 daily users'}
    ] : [
      {tag: 'SaaS Startup · กรุงเทพฯ', title: 'Harden และเปิดตัว Prototype จาก Lovable', desc: 'Prototype ที่ผู้ก่อตั้งสร้างด้วย Lovable ได้รับการตรวจความปลอดภัย สร้างระบบล็อกอินใหม่ และขึ้น Hosting จริง ทั้งหมดใน 3 สัปดาห์', result: 'ไม่พบช่องโหว่ร้ายแรงตอนเปิดตัว'},
      {tag: 'Marketplace · กรุงเทพฯ', title: 'ทำให้แอปจาก Bolt พร้อมรับชำระเงิน', desc: 'เราเสริมความแข็งแรงให้การเชื่อมต่อ Stripe แก้กรณีล้มเหลวและลองใหม่ของการจ่ายเงิน และย้ายแอปไปอยู่บน Hosting จริง', result: 'ไม่มีธุรกรรมล้มเหลวหลังเปิดตัว'},
      {tag: 'Internal Tool · ทั่วประเทศ', title: 'ขยายเครื่องมือจาก Cursor รองรับผู้ใช้ 200 คน', desc: 'เราจัดระเบียบสถาปัตยกรรมและสร้างระบบรองรับใหม่ เพื่อให้เครื่องมือที่คนคนเดียวเขียนไว้ ใช้ได้ทั้งบริษัท', result: 'ขยายจาก Prototype สู่ผู้ใช้ 200 คนต่อวัน'}
    ]
  const faqs        = isEN ? [
      {q: 'What tools do you support finishing apps from?', a: 'Cursor, Claude Code, Lovable, Bolt, v0, Replit, and similar AI-assisted tools. We work with whatever code exists, however it was built.'},
      {q: 'Do you need to rewrite everything from scratch?', a: 'In most cases, no. We build on the existing codebase and fix structure and security problems in place. A rewrite is rarely needed, and we will say so honestly if it is.'},
      {q: 'What kind of security issues do you typically find?', a: 'Exposed API keys, endpoints with no authentication check, unvalidated user input, and database rules that are far too permissive are the most common.'},
      {q: 'Can you also add new features, not just fix issues?', a: 'Yes. Once the foundation is solid, we can keep building features with you as an ongoing engagement.'},
      {q: 'How long does it take to go from prototype to launch?', a: 'A focused app usually takes 2-3 weeks from audit to launch. Bigger codebases, or ones with serious security gaps, can take 4-6 weeks.'},
      {q: 'What do you need from us to start the audit?', a: 'Read access to the repository, a list of the services the app uses (database, payments, email, hosting), and a short note on what you expect users to do. We do not need production passwords.'},
      {q: 'Will we be able to maintain the code afterwards?', a: 'Yes. We document the architecture, tidy the structure, and walk your team through it, so you can keep going without us.'}
    ] : [
      {q: 'รองรับเครื่องมือแบบไหนบ้างในการช่วยจบแอป?', a: 'Cursor, Claude Code, Lovable, Bolt, v0, Replit และเครื่องมือ AI ที่คล้ายกัน เราทำงานกับโค้ดที่มีอยู่ ไม่ว่าจะสร้างมาด้วยวิธีไหน'},
      {q: 'ต้องเขียนใหม่ทั้งหมดไหม?', a: 'ส่วนใหญ่ไม่ต้อง เราต่อยอดจาก Codebase ที่มีและแก้ปัญหาโครงสร้างกับความปลอดภัยในที่เดิม แทบไม่จำเป็นต้องเขียนใหม่ และถ้าจำเป็นจริง เราจะบอกตรงๆ'},
      {q: 'ปัญหาด้านความปลอดภัยที่มักพบคืออะไรบ้าง?', a: 'API Key ที่หลุด Endpoint ที่ไม่เช็กการยืนยันตัวตน ข้อมูลจากผู้ใช้ที่ไม่ได้ตรวจ และกฎฐานข้อมูลที่เปิดสิทธิ์กว้างเกินไป เป็นปัญหาที่พบบ่อยที่สุด'},
      {q: 'เพิ่มฟีเจอร์ใหม่ได้ด้วยไหม ไม่ใช่แค่แก้ปัญหา?', a: 'ได้ เมื่อพื้นฐานมั่นคงแล้ว เราทำฟีเจอร์ใหม่ต่อให้ได้เรื่อยๆ ในรูปแบบงานต่อเนื่อง'},
      {q: 'ใช้เวลานานแค่ไหนจาก Prototype ถึงเปิดตัว?', a: 'แอปที่ขอบเขตชัดเจนมักใช้ 2-3 สัปดาห์ตั้งแต่ตรวจจนเปิดตัว ส่วน Codebase ที่ใหญ่ หรือมีช่องโหว่ร้ายแรง อาจใช้ 4-6 สัปดาห์'},
      {q: 'ต้องเตรียมอะไรให้เราก่อนเริ่มตรวจ?', a: 'สิทธิ์อ่าน Repository รายการบริการที่แอปใช้ (ฐานข้อมูล ชำระเงิน อีเมล Hosting) และโน้ตสั้นๆ ว่าคาดว่าผู้ใช้จะทำอะไรในแอป เราไม่ต้องการรหัสผ่านของระบบจริง'},
      {q: 'หลังจบงาน เราจะดูแลโค้ดต่อเองได้ไหม?', a: 'ได้ เราทำเอกสารสถาปัตยกรรม จัดโครงสร้างให้เป็นระเบียบ และอธิบายให้ทีมคุณฟัง คุณไปต่อเองได้โดยไม่ต้องพึ่งเรา'}
    ]
  const related     = isEN ? [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ] : [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ]

  const auditLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>audit --scope codebase,secrets,auth</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? '15 issues found, 3 critical' : 'พบ 15 ปัญหา เป็นระดับร้ายแรง 3 รายการ'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>deploy --target production</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'Live infra, backups, monitoring on' : 'ระบบจริง Backup และ Monitoring พร้อม'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>test --edge-cases payment,auth</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--accent-2)' }}>✓</span>&nbsp;{isEN ? 'All flows pass, ready to ship' : 'ผ่านทุกขั้นตอน พร้อมเปิดตัว'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="theme-dark rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgb(var(--fg) / 0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgb(var(--fg) / 0.85)', fontFamily: 'monospace' }}>launch-check.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgb(var(--fg) / 0.85)' }}>
          {auditLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgb(var(--fg) / 0.85)' }}>{isEN ? 'Launch Readiness' : 'Launch Readiness'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgb(var(--fg) / 0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '90%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-2)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'Production-ready in under 3 weeks' : 'พร้อมใช้งานจริงในไม่ถึง 3 สัปดาห์'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-search-code', title: 'Codebase & Architecture Audit', desc: 'A full read of the repository: data model, auth flow, third-party services, and hosting. You get a ranked list of risks in plain language and a fixed-price quote for fixing them.' },
    { icon: 'ti-shield-lock', title: 'Security Hardening', desc: 'Exposed keys, endpoints without permission checks, loose database rules, and unchecked input closed and tested, not just patched.' },
    { icon: 'ti-server', title: 'Production Infrastructure', desc: 'Staging and production, automatic backups, error alerts, a deploy pipeline, and HTTPS, on a Thai or regional provider if you prefer.' },
    { icon: 'ti-list-check', title: 'The Last 10%', desc: 'Password reset, payment retries and failures, error states, email delivery, and the flows your AI tool left unfinished.' },
    { icon: 'ti-git-branch', title: 'Codebase Cleanup', desc: 'Dead and duplicated code removed, structure tidied, and tests added around the flows that matter, so the project is easy for a new developer to pick up.' },
    { icon: 'ti-headset', title: 'Post-Launch Support', desc: 'Log watching, fixes for what real users trip over, and help with the first features. Optional, billed monthly, and easy to stop.' },
  ] : [
    { icon: 'ti-search-code', title: 'Codebase & Architecture Audit', desc: 'อ่านทั้ง Repository ทั้ง Data Model ขั้นตอนล็อกอิน บริการภายนอก และ Hosting คุณได้รายการความเสี่ยงเรียงลำดับด้วยภาษาอ่านง่าย พร้อมใบเสนอราคาคงที่สำหรับการแก้' },
    { icon: 'ti-shield-lock', title: 'Security Hardening', desc: 'ปิดและทดสอบทั้ง Key ที่หลุด Endpoint ที่ไม่เช็กสิทธิ์ กฎฐานข้อมูลที่หลวม และข้อมูลขาเข้าที่ไม่ได้ตรวจ ไม่ใช่แค่ปะไปเฉยๆ' },
    { icon: 'ti-server', title: 'Production Infrastructure', desc: 'แยก Staging กับ Production มี Backup อัตโนมัติ แจ้งเตือน Error มี Pipeline Deploy และ HTTPS บนผู้ให้บริการในไทยหรือในภูมิภาคถ้าต้องการ' },
    { icon: 'ti-list-check', title: 'The Last 10%', desc: 'รีเซ็ตรหัสผ่าน การลองใหม่และการล้มเหลวของการชำระเงิน หน้า Error การส่งอีเมล และขั้นตอนที่เครื่องมือ AI ทำค้างไว้' },
    { icon: 'ti-git-branch', title: 'Codebase Cleanup', desc: 'ลบโค้ดที่ไม่ใช้และโค้ดซ้ำ จัดโครงสร้างให้เป็นระเบียบ และเพิ่ม Test ครอบขั้นตอนสำคัญ ให้นักพัฒนาใหม่รับช่วงต่อได้ง่าย' },
    { icon: 'ti-headset', title: 'Post-Launch Support', desc: 'ดู Log แก้จุดที่ผู้ใช้จริงสะดุด และช่วยทำฟีเจอร์แรกๆ เป็นทางเลือก เก็บรายเดือน และเลิกได้ง่าย' },
  ]

  const techStack = [
    { label: 'Cursor', svg: 'cursor' },
    { label: 'Claude Code', svg: 'claude' },
    { label: 'Lovable', icon: 'ti-sparkles' },
    { label: 'Bolt', icon: 'ti-bolt' },
    { label: 'v0', svg: 'v0' },
    { label: 'Replit', svg: 'replit' },
    { label: 'Next.js', svg: 'nextdotjs' },
    { label: 'React', svg: 'react' },
    { label: 'TypeScript', svg: 'typescript' },
    { label: 'Supabase', svg: 'supabase' },
    { label: 'Firebase', svg: 'firebase' },
    { label: 'PostgreSQL', svg: 'postgresql' },
    { label: 'Stripe', svg: 'stripe' },
    { label: 'Vercel', svg: 'vercel' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Audit', desc: 'Code, architecture, secrets, hosting, and a fixed-price report' },
    { no: '02', title: 'Triage', desc: 'Findings sorted by risk and launch impact' },
    { no: '03', title: 'Harden', desc: 'Security fixes first, each one tested' },
    { no: '04', title: 'Complete', desc: 'Unfinished flows and edge cases' },
    { no: '05', title: 'Launch', desc: 'Production hosting, backups, and a rehearsed release' },
    { no: '06', title: 'Support', desc: 'Close watch early on, plus handover notes' },
  ] : [
    { no: '01', title: 'Audit', desc: 'โค้ด สถาปัตยกรรม Secret Hosting และรายงานราคาคงที่' },
    { no: '02', title: 'Triage', desc: 'จัดกลุ่มสิ่งที่พบตามความเสี่ยงและผลต่อการเปิดตัว' },
    { no: '03', title: 'Harden', desc: 'แก้ความปลอดภัยก่อน ทุกจุดมีการทดสอบ' },
    { no: '04', title: 'Complete', desc: 'ขั้นตอนที่ค้างและกรณีพิเศษ' },
    { no: '05', title: 'Launch', desc: 'Hosting สำหรับ Production, Backup และซ้อมปล่อย' },
    { no: '06', title: 'Support', desc: 'ดูใกล้ชิดช่วงแรก พร้อมโน้ตส่งมอบ' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What AI coding tools do you support finishing apps from?', a: 'Cursor, Claude Code, Lovable, Bolt, v0, Replit, and similar AI-assisted tools. We work with whatever code exists in your repository, however it was originally built, and that includes projects that mix AI-written and hand-written code.' },
    { q: 'Do you need to rewrite everything from scratch?', a: 'In most cases, no. We build on the existing codebase and fix structural and security problems in place. A full rewrite is rarely necessary or cost-effective, and if we think one is the right call, we will explain why before you spend anything on it.' },
    { q: 'What kind of security issues do you typically find in AI-generated code?', a: 'Exposed API keys and secrets committed to the repository, missing authentication checks on API endpoints, unvalidated user input, and database access rules that let far too many people read or change data are the most common findings.' },
    { q: 'Can you also add new features, not just fix issues?', a: 'Yes. Once the foundation is solid and secure, we can continue building new features as an ongoing engagement, working within the existing codebase and its conventions.' },
    { q: 'How long does it take to go from prototype to production-ready?', a: 'A focused app with a moderate feature set typically takes 2-3 weeks from audit to production-ready launch. Larger or more complex codebases, or ones with significant security gaps, can take 4-6 weeks.' },
    { q: 'How much does this kind of engagement cost?', a: 'Prices start at $500 (quick security check) and $1,500 (full audit with report); fixing the issues starts at $3,500 and a full cleanup from $5,000, depending on codebase size and what the audit finds. We always start with a fixed-price audit, so you know the scope and cost of remediation before committing to the full engagement.' },
    { q: 'Will I understand the codebase once you’re done, or will it still be a black box?', a: 'You will understand it. We document the architecture, tidy the structure as we go, and walk your team through the code, so you are never dependent on us to make future changes.' },
    { q: 'What if the app has already launched and we’re seeing issues in production?', a: 'We handle that too. The audit is the same, but we triage live issues first and stop the active problems before moving on to the broader hardening and completion work.' },
    { q: 'What do you need from us to start the audit?', a: 'Read access to the repository, a list of the services the app relies on (database, payments, email, hosting), and a short note on how you expect people to use it. We do not need production passwords to audit the code.' },
    { q: 'Where will the app be hosted, and who owns the accounts?', a: 'You own every account: the hosting, the domain, the database, and the code repository. We set things up inside your accounts, or hand them over cleanly, and we can use a Thai or regional provider where data location matters to you.' },
  ] : [
    { q: 'รองรับเครื่องมือ AI Coding แบบไหนบ้างในการช่วยจบแอป?', a: 'Cursor, Claude Code, Lovable, Bolt, v0, Replit และเครื่องมือ AI ที่คล้ายกัน เราทำงานกับโค้ดที่มีอยู่ใน Repository ของคุณ ไม่ว่าจะสร้างมาด้วยวิธีไหนแต่แรก รวมถึงโปรเจกต์ที่มีทั้งโค้ดที่ AI เขียนและที่คนเขียนปนกัน' },
    { q: 'ต้องเขียนใหม่ทั้งหมดไหม?', a: 'ส่วนใหญ่ไม่ต้อง เราต่อยอดจาก Codebase ที่มีอยู่ และแก้ปัญหาโครงสร้างกับความปลอดภัยในที่เดิม การเขียนใหม่ทั้งหมดมักไม่จำเป็นและไม่คุ้ม ถ้าเราเห็นว่าเขียนใหม่เป็นทางที่ถูกจริงๆ เราจะอธิบายเหตุผลให้ก่อนที่คุณจะจ่ายอะไร' },
    { q: 'ปัญหาด้านความปลอดภัยที่มักพบในโค้ดจาก AI คืออะไรบ้าง?', a: 'API Key และ Secret ที่ถูก Commit เข้า Repository, Endpoint ที่ไม่เช็กการยืนยันตัวตน, ข้อมูลจากผู้ใช้ที่ไม่ได้ตรวจ และกฎการเข้าถึงฐานข้อมูลที่ให้คนอ่านหรือแก้ข้อมูลได้กว้างเกินไป เป็นสิ่งที่พบบ่อยที่สุด' },
    { q: 'เพิ่มฟีเจอร์ใหม่ได้ด้วยไหม ไม่ใช่แค่แก้ปัญหา?', a: 'ได้ เมื่อพื้นฐานมั่นคงและปลอดภัยแล้ว เราทำฟีเจอร์ใหม่ต่อเนื่องได้ ในรูปแบบงานต่อเนื่อง โดยทำภายใน Codebase และแบบแผนที่มีอยู่' },
    { q: 'ใช้เวลานานแค่ไหนกว่าจะจาก Prototype ไปพร้อมใช้งานจริง?', a: 'แอปที่ขอบเขตชัดเจนและมีฟีเจอร์ระดับปานกลาง มักใช้ 2-3 สัปดาห์ตั้งแต่ตรวจจนพร้อมเปิดตัว ส่วน Codebase ที่ใหญ่หรือซับซ้อนกว่า หรือมีช่องโหว่ด้านความปลอดภัยมาก อาจใช้ 4-6 สัปดาห์' },
    { q: 'งานลักษณะนี้มีค่าใช้จ่ายเท่าไหร่?', a: 'การตรวจเริ่มที่ ฿5,900 (ตรวจความปลอดภัยด่วน) และ ฿15,900 (ตรวจเต็มพร้อมรายงาน) ส่วนการแก้ไขเริ่มที่ ฿39,000 และแพ็กเกจจัดระเบียบเต็มรูปแบบเริ่มที่ ฿59,000 ขึ้นอยู่กับขนาด Codebase และปัญหาที่พบ เราเริ่มด้วยการตรวจแบบราคาคงที่เสมอ คุณจะรู้ขอบเขตและค่าใช้จ่ายในการแก้ไขก่อนตัดสินใจทำงานเต็มรูปแบบ' },
    { q: 'หลังจบงานแล้ว เราจะเข้าใจ Codebase หรือยังเป็นกล่องดำอยู่?', a: 'คุณจะเข้าใจเต็มที่ เราทำเอกสารสถาปัตยกรรม จัดโครงสร้างไปพร้อมกัน และพาทีมคุณเดินดูโค้ด คุณจะได้ไม่ต้องพึ่งเราเมื่อต้องแก้ไขในอนาคต' },
    { q: 'ถ้าแอปเปิดตัวไปแล้วและกำลังพบปัญหาตอนใช้งานจริงล่ะ?', a: 'เราดูแลกรณีนี้ด้วย วิธีตรวจเหมือนกัน แต่เราจะคัดปัญหาที่เกิดอยู่จริงมาแก้ก่อน เพื่อหยุดความเสียหายที่ยังเกิดต่อ แล้วค่อยไปต่อที่งานเสริมความปลอดภัยและทำส่วนที่ขาดให้จบ' },
    { q: 'ต้องเตรียมอะไรให้เราก่อนเริ่มตรวจ?', a: 'สิทธิ์อ่าน Repository รายการบริการที่แอปใช้ (ฐานข้อมูล ชำระเงิน อีเมล Hosting) และโน้ตสั้นๆ ว่าคาดว่าผู้ใช้จะใช้แอปอย่างไร เราไม่ต้องการรหัสผ่านของระบบจริงเพื่อตรวจโค้ด' },
    { q: 'แอปจะอยู่บน Hosting ที่ไหน และใครเป็นเจ้าของบัญชี?', a: 'คุณเป็นเจ้าของทุกบัญชี ทั้ง Hosting โดเมน ฐานข้อมูล และ Repository ของโค้ด เราตั้งค่าในบัญชีของคุณ หรือส่งมอบให้เรียบร้อย และใช้ผู้ให้บริการในไทยหรือในภูมิภาคได้ถ้าที่ตั้งของข้อมูลสำคัญกับคุณ' },
  ]

  const pricingTiers = isEN ? [
      { name: 'Quick Security Check', price: 'from $500', time: '1–3 days', desc: 'Fast scan for exposed keys, open database rules and auth holes, plus a short written summary.' },
      { name: 'Full Audit + Report', price: 'from $1,500', time: '5–7 business days', desc: 'Security, architecture, performance and deploy review with a prioritized fix plan and fixed quote for the work.' },
      { name: 'Audit + Fix: Launch-Ready', price: 'from $3,500', time: '2–3 weeks', desc: 'We fix the critical issues, add tests, set up CI and deploy to production you own.' },
      { name: 'Full Cleanup Package', price: 'from $5,000', time: '3–6 weeks', desc: 'Restructure, security hardening, missing features, documentation and a walkthrough for your team.' }
    ] : [
      { name: 'ตรวจความปลอดภัยด่วน', price: 'เริ่ม ฿5,900', time: '1–3 วัน', desc: 'สแกนหา Key ที่หลุด กฎฐานข้อมูลที่เปิดโล่ง และช่องโหว่ระบบล็อกอิน พร้อมสรุปสั้นๆ เป็นลายลักษณ์อักษร' },
      { name: 'ตรวจเต็ม + รายงาน', price: 'เริ่ม ฿15,900', time: '5–7 วันทำการ', desc: 'ตรวจความปลอดภัย โครงสร้าง ประสิทธิภาพ และการ Deploy พร้อมแผนแก้ตามลำดับความสำคัญและใบเสนอราคาคงที่' },
      { name: 'ตรวจ + แก้ให้พร้อมเปิดตัว', price: 'เริ่ม ฿39,000', time: '2–3 สัปดาห์', desc: 'แก้ปัญหาร้ายแรง เพิ่มเทสต์ ตั้ง CI และ Deploy ขึ้น Production บนบัญชีของคุณเอง' },
      { name: 'แพ็กเกจจัดระเบียบเต็มรูปแบบ', price: 'เริ่ม ฿59,000', time: '3–6 สัปดาห์', desc: 'จัดโครงสร้างใหม่ เสริมความปลอดภัย ทำฟีเจอร์ที่ขาด เอกสาร และพาทีมเดินดูโค้ด' }
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
            {isEN ? 'Tools We Support' : 'เครื่องมือที่รองรับ'}
          </p>
          <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Work With' : 'เทคโนโลยีที่เราทำงานด้วย'}
          </h2>
          <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Whatever AI tool generated your app, and whatever stack it landed on, we can pick it up from there.'
              : 'ไม่ว่าแอปของคุณจะสร้างด้วยเครื่องมือ AI ตัวไหน หรือใช้เทคโนโลยีแบบไหน เราก็รับช่วงต่อได้'}
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
              ? 'A clear path from audit to a launched, production-grade app — adjusted per codebase, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการตรวจไปจนถึงแอประดับใช้งานจริงที่เปิดตัวแล้ว ปรับตามแต่ละ Codebase ไม่ใช่สูตรสำเร็จ'}
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
          <FAQ embedded lang={params.lang} h2={isEN ? 'FAQ' : 'คำถามที่พบบ่อย'} subtitle={isEN ? 'Straight answers about finishing what you’ve built.' : 'คำตอบตรงๆ เรื่องการจบสิ่งที่คุณสร้างมาแล้ว'} items={darkFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </div>
    </section>


    <section className="theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>
          {isEN ? 'Pricing' : 'ราคา'}
        </p>
        <h2 className="t-display mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Fixed prices. Clear timelines.' : 'ราคาคงที่ ระยะเวลาชัดเจน'}
        </h2>
        <p className="mb-12" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Start small with an audit. Prices are starting prices in USD, confirmed as a fixed quote once we have seen your repository.' : 'เริ่มจากการตรวจเล็กๆ ราคาทั้งหมดเป็นราคาเริ่มต้น (บาท) และจะยืนยันเป็นใบเสนอราคาคงที่หลังเราได้ดู Repository ของคุณ'}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricingTiers.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl flex flex-col" style={{ background: 'rgb(var(--fg) / 0.03)', border: '1px solid rgb(var(--fg) / 0.07)' }}>
              <h3 className="mb-3" style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.15rem' }}>{t.name}</h3>
              <p className="t-display mb-1" style={{ color: 'var(--ink)', fontSize: '2rem' }}>{t.price}</p>
              <p className="mb-4 text-sm" style={{ color: 'var(--accent-2)', fontWeight: 600 }}>{t.time}</p>
              <p className="leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1rem', fontWeight: 400 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm" style={{ color: 'rgb(var(--fg) / 0.7)' }}>
          {isEN ? 'Ongoing maintenance and monitoring is available from $500/month.' : 'บริการดูแลและเฝ้าระวังต่อเนื่องเริ่มที่ ฿5,900/เดือน'}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Book an audit' : 'จองการตรวจ'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0je6QG4mvfhRlih-PGXzRyFuCp-M3VyWFMwv8cbGiikwZ9Lo_17rWIR7q_ssEg92l9juim9xXE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ border: '1px solid rgb(var(--fg) / 0.3)', color: 'var(--ink)', fontWeight: 500 }}
          >
            {isEN ? 'Book a free 30-min call' : 'จองคุยฟรี 30 นาที'}
            <i className="ti ti-video" style={{ fontSize: 17 }} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section className="cta-final theme-dark relative overflow-hidden" style={{ background: 'var(--bg)' }}>
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
          <a href="mailto:info@haliviq.com" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            info@haliviq.com
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
      heroDark heroVisual="finish-your-vibe-coded-app" heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/finish-your-vibe-coded-app/why1.jpg"
      whyImg2="/images/services/finish-your-vibe-coded-app/why2.jpg"
      featureImg="/images/services/finish-your-vibe-coded-app/feature.jpg"
      processImg="/images/services/finish-your-vibe-coded-app/process.jpg"
    />
  )
}
