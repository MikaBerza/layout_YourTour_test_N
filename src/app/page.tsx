import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <div className='wrapper'>
      <header className='heading'>
        <nav className='navbar'>
          <a className='navbar__logo' href='#YourTour'>
            <svg
              className='navbar__logo-YourTour'
              width='181.84'
              height='32'
              viewBox='0 0 181.84 32'
            >
              <path d='M7.476 0.879883L13.902 14.0679L20.412 0.879883H27.93L17.304 20.5359V30.6999H10.458V20.4519L0 0.879883H7.476Z' />
              <path d='M36.8041 31.1199C34.2841 31.1199 32.1421 30.5879 30.3781 29.5239C28.6421 28.4599 27.3121 27.0599 26.3881 25.3239C25.4641 23.5879 25.0021 21.7119 25.0021 19.6959C25.0021 17.6519 25.4641 15.7619 26.3881 14.0259C27.3121 12.2899 28.6561 10.8899 30.4201 9.82588C32.1841 8.76188 34.3121 8.22988 36.8041 8.22988C39.2961 8.22988 41.4241 8.76188 43.1881 9.82588C44.9521 10.8899 46.2961 12.2899 47.2201 14.0259C48.1441 15.7619 48.6061 17.6519 48.6061 19.6959C48.6061 21.7119 48.1441 23.5879 47.2201 25.3239C46.2961 27.0599 44.9521 28.4599 43.1881 29.5239C41.4241 30.5879 39.2961 31.1199 36.8041 31.1199ZM31.8901 19.6959C31.8901 21.4039 32.3521 22.7899 33.2761 23.8539C34.2281 24.9179 35.4041 25.4499 36.8041 25.4499C38.1761 25.4499 39.3241 24.9179 40.2481 23.8539C41.2001 22.7899 41.6761 21.4039 41.6761 19.6959C41.6761 17.9879 41.2001 16.6019 40.2481 15.5379C39.3241 14.4739 38.1761 13.9419 36.8041 13.9419C35.4041 13.9419 34.2281 14.4739 33.2761 15.5379C32.3521 16.6019 31.8901 17.9879 31.8901 19.6959Z' />
              <path d='M51.7289 22.7619V8.64988H58.4489V21.2919C58.4489 24.0639 59.4709 25.4499 61.5149 25.4499C62.4109 25.4499 63.2789 25.2119 64.1189 24.7359C64.9589 24.2319 65.7009 23.4059 66.3449 22.2579V8.64988H73.0649V23.2239C73.0649 23.8959 73.1629 24.3719 73.3589 24.6519C73.5829 24.9319 73.9609 25.0859 74.4929 25.1139V30.6999C73.8489 30.8119 73.3029 30.8959 72.8549 30.9519C72.4069 31.0079 72.0009 31.0359 71.6369 31.0359C69.2289 31.0359 67.8569 30.0979 67.5209 28.2219L67.3949 26.8779C66.3869 28.3339 65.1269 29.4119 63.6149 30.1119C62.1309 30.7839 60.4649 31.1199 58.6169 31.1199C56.3769 31.1199 54.6689 30.4059 53.4929 28.9779C52.3169 27.5499 51.7289 25.4779 51.7289 22.7619Z' />
              <path d='M92.2569 14.4039C90.6329 14.4319 89.1629 14.6979 87.8469 15.2019C86.5309 15.7059 85.5789 16.4619 84.9909 17.4699V30.6999H78.2709V8.64988H84.4449V13.1019C85.2009 11.6179 86.1809 10.4559 87.3849 9.61588C88.5889 8.77588 89.8489 8.34188 91.1649 8.31388C91.7249 8.31388 92.0889 8.32788 92.2569 8.35588V14.4039Z' />
              <path d='M116.92 6.92788H107.848V30.6999H100.96V6.92788H91.8458V0.879883H116.92V6.92788Z' />
              <path d='M126.382 31.1199C123.862 31.1199 121.72 30.5879 119.956 29.5239C118.22 28.4599 116.89 27.0599 115.966 25.3239C115.042 23.5879 114.58 21.7119 114.58 19.6959C114.58 17.6519 115.042 15.7619 115.966 14.0259C116.89 12.2899 118.234 10.8899 119.998 9.82588C121.762 8.76188 123.89 8.22988 126.382 8.22988C128.874 8.22988 131.002 8.76188 132.766 9.82588C134.53 10.8899 135.874 12.2899 136.798 14.0259C137.722 15.7619 138.184 17.6519 138.184 19.6959C138.184 21.7119 137.722 23.5879 136.798 25.3239C135.874 27.0599 134.53 28.4599 132.766 29.5239C131.002 30.5879 128.874 31.1199 126.382 31.1199ZM121.468 19.6959C121.468 21.4039 121.93 22.7899 122.854 23.8539C123.806 24.9179 124.982 25.4499 126.382 25.4499C127.754 25.4499 128.902 24.9179 129.826 23.8539C130.778 22.7899 131.254 21.4039 131.254 19.6959C131.254 17.9879 130.778 16.6019 129.826 15.5379C128.902 14.4739 127.754 13.9419 126.382 13.9419C124.982 13.9419 123.806 14.4739 122.854 15.5379C121.93 16.6019 121.468 17.9879 121.468 19.6959Z' />
              <path d='M141.307 22.7619V8.64988H148.027V21.2919C148.027 24.0639 149.049 25.4499 151.093 25.4499C151.989 25.4499 152.857 25.2119 153.697 24.7359C154.537 24.2319 155.279 23.4059 155.923 22.2579V8.64988H162.643V23.2239C162.643 23.8959 162.741 24.3719 162.937 24.6519C163.161 24.9319 163.539 25.0859 164.071 25.1139V30.6999C163.427 30.8119 162.881 30.8959 162.433 30.9519C161.985 31.0079 161.579 31.0359 161.215 31.0359C158.807 31.0359 157.435 30.0979 157.099 28.2219L156.973 26.8779C155.965 28.3339 154.705 29.4119 153.193 30.1119C151.709 30.7839 150.043 31.1199 148.195 31.1199C145.955 31.1199 144.247 30.4059 143.071 28.9779C141.895 27.5499 141.307 25.4779 141.307 22.7619Z' />
              <path d='M181.835 14.4039C180.211 14.4319 178.741 14.6979 177.425 15.2019C176.109 15.7059 175.157 16.4619 174.569 17.4699V30.6999H167.849V8.64988H174.023V13.1019C174.779 11.6179 175.759 10.4559 176.963 9.61588C178.167 8.77588 179.427 8.34188 180.743 8.31388C181.303 8.31388 181.667 8.32788 181.835 8.35588V14.4039Z' />
            </svg>
          </a>
          <ul className='navbar__menu'>
            <li className='navbar__menu-item'>
              <a className='navbar__menu-link' href='#choose-tour'>
                Туры
              </a>
            </li>
            <li className='navbar__menu-item'>
              <a className='navbar__menu-link' href='#collect-tour'>
                Создать тур
              </a>
            </li>
            <li className='navbar__menu-item'>
              <a className='navbar__menu-link' href='#reviews'>
                Отзывы
              </a>
            </li>
            <li className='navbar__menu-item'>
              <a className='navbar__menu-link' href='#stories'>
                Истории
              </a>
            </li>
          </ul>
          <a className='navbar__telephoneNumber' href='tel:+79999999999'>
            <svg
              className='navbar__telephoneNumber-item'
              width='154'
              height='16'
              viewBox='0 0 154 16'
            >
              <path d='M6.54297 7.37305H10.5078V9.08203H6.54297V13.5742H4.72656V9.08203H0.761719V7.37305H4.72656V3.22266H6.54297V7.37305ZM21.709 1.79688L15.8203 15H13.9258L19.7949 2.26562H12.0996V0.78125H21.709V1.79688ZM35.6445 8.75C35.2669 9.19922 34.8145 9.56055 34.2871 9.83398C33.7663 10.1074 33.1934 10.2441 32.5684 10.2441C31.748 10.2441 31.0319 10.0423 30.4199 9.63867C29.8145 9.23503 29.3457 8.66862 29.0137 7.93945C28.6816 7.20378 28.5156 6.39323 28.5156 5.50781C28.5156 4.55729 28.6947 3.70117 29.0527 2.93945C29.4173 2.17773 29.9316 1.59505 30.5957 1.19141C31.2598 0.78776 32.0345 0.585938 32.9199 0.585938C34.3262 0.585938 35.4329 1.11328 36.2402 2.16797C37.054 3.21615 37.4609 4.64844 37.4609 6.46484V6.99219C37.4609 9.75911 36.9141 11.7806 35.8203 13.0566C34.7266 14.3262 33.0762 14.9772 30.8691 15.0098H30.5176V13.4863H30.8984C32.3893 13.4603 33.5352 13.0729 34.3359 12.3242C35.1367 11.569 35.5729 10.3776 35.6445 8.75ZM32.8613 8.75C33.4668 8.75 34.0234 8.56445 34.5312 8.19336C35.0456 7.82227 35.4199 7.36328 35.6543 6.81641V6.09375C35.6543 4.90885 35.3971 3.94531 34.8828 3.20312C34.3685 2.46094 33.7174 2.08984 32.9297 2.08984C32.1354 2.08984 31.4974 2.39583 31.0156 3.00781C30.5339 3.61328 30.293 4.41406 30.293 5.41016C30.293 6.38021 30.5241 7.18099 30.9863 7.8125C31.4551 8.4375 32.0801 8.75 32.8613 8.75ZM46.875 8.75C46.4974 9.19922 46.0449 9.56055 45.5176 9.83398C44.9967 10.1074 44.4238 10.2441 43.7988 10.2441C42.9785 10.2441 42.2624 10.0423 41.6504 9.63867C41.0449 9.23503 40.5762 8.66862 40.2441 7.93945C39.9121 7.20378 39.7461 6.39323 39.7461 5.50781C39.7461 4.55729 39.9251 3.70117 40.2832 2.93945C40.6478 2.17773 41.1621 1.59505 41.8262 1.19141C42.4902 0.78776 43.265 0.585938 44.1504 0.585938C45.5566 0.585938 46.6634 1.11328 47.4707 2.16797C48.2845 3.21615 48.6914 4.64844 48.6914 6.46484V6.99219C48.6914 9.75911 48.1445 11.7806 47.0508 13.0566C45.957 14.3262 44.3066 14.9772 42.0996 15.0098H41.748V13.4863H42.1289C43.6198 13.4603 44.7656 13.0729 45.5664 12.3242C46.3672 11.569 46.8034 10.3776 46.875 8.75ZM44.0918 8.75C44.6973 8.75 45.2539 8.56445 45.7617 8.19336C46.276 7.82227 46.6504 7.36328 46.8848 6.81641V6.09375C46.8848 4.90885 46.6276 3.94531 46.1133 3.20312C45.599 2.46094 44.9479 2.08984 44.1602 2.08984C43.3659 2.08984 42.7279 2.39583 42.2461 3.00781C41.7643 3.61328 41.5234 4.41406 41.5234 5.41016C41.5234 6.38021 41.7546 7.18099 42.2168 7.8125C42.6855 8.4375 43.3105 8.75 44.0918 8.75ZM58.1055 8.75C57.7279 9.19922 57.2754 9.56055 56.748 9.83398C56.2272 10.1074 55.6543 10.2441 55.0293 10.2441C54.209 10.2441 53.4928 10.0423 52.8809 9.63867C52.2754 9.23503 51.8066 8.66862 51.4746 7.93945C51.1426 7.20378 50.9766 6.39323 50.9766 5.50781C50.9766 4.55729 51.1556 3.70117 51.5137 2.93945C51.8783 2.17773 52.3926 1.59505 53.0566 1.19141C53.7207 0.78776 54.4954 0.585938 55.3809 0.585938C56.7871 0.585938 57.8939 1.11328 58.7012 2.16797C59.515 3.21615 59.9219 4.64844 59.9219 6.46484V6.99219C59.9219 9.75911 59.375 11.7806 58.2812 13.0566C57.1875 14.3262 55.5371 14.9772 53.3301 15.0098H52.9785V13.4863H53.3594C54.8503 13.4603 55.9961 13.0729 56.7969 12.3242C57.5977 11.569 58.0339 10.3776 58.1055 8.75ZM55.3223 8.75C55.9277 8.75 56.4844 8.56445 56.9922 8.19336C57.5065 7.82227 57.8809 7.36328 58.1152 6.81641V6.09375C58.1152 4.90885 57.8581 3.94531 57.3438 3.20312C56.8294 2.46094 56.1784 2.08984 55.3906 2.08984C54.5964 2.08984 53.9583 2.39583 53.4766 3.00781C52.9948 3.61328 52.7539 4.41406 52.7539 5.41016C52.7539 6.38021 52.985 7.18099 53.4473 7.8125C53.916 8.4375 54.541 8.75 55.3223 8.75ZM74.2969 8.75C73.9193 9.19922 73.4668 9.56055 72.9395 9.83398C72.4186 10.1074 71.8457 10.2441 71.2207 10.2441C70.4004 10.2441 69.6842 10.0423 69.0723 9.63867C68.4668 9.23503 67.998 8.66862 67.666 7.93945C67.334 7.20378 67.168 6.39323 67.168 5.50781C67.168 4.55729 67.347 3.70117 67.7051 2.93945C68.0697 2.17773 68.584 1.59505 69.248 1.19141C69.9121 0.78776 70.6868 0.585938 71.5723 0.585938C72.9785 0.585938 74.0853 1.11328 74.8926 2.16797C75.7064 3.21615 76.1133 4.64844 76.1133 6.46484V6.99219C76.1133 9.75911 75.5664 11.7806 74.4727 13.0566C73.3789 14.3262 71.7285 14.9772 69.5215 15.0098H69.1699V13.4863H69.5508C71.0417 13.4603 72.1875 13.0729 72.9883 12.3242C73.7891 11.569 74.2253 10.3776 74.2969 8.75ZM71.5137 8.75C72.1191 8.75 72.6758 8.56445 73.1836 8.19336C73.6979 7.82227 74.0723 7.36328 74.3066 6.81641V6.09375C74.3066 4.90885 74.0495 3.94531 73.5352 3.20312C73.0208 2.46094 72.3698 2.08984 71.582 2.08984C70.7878 2.08984 70.1497 2.39583 69.668 3.00781C69.1862 3.61328 68.9453 4.41406 68.9453 5.41016C68.9453 6.38021 69.1764 7.18099 69.6387 7.8125C70.1074 8.4375 70.7324 8.75 71.5137 8.75ZM85.5273 8.75C85.1497 9.19922 84.6973 9.56055 84.1699 9.83398C83.6491 10.1074 83.0762 10.2441 82.4512 10.2441C81.6309 10.2441 80.9147 10.0423 80.3027 9.63867C79.6973 9.23503 79.2285 8.66862 78.8965 7.93945C78.5645 7.20378 78.3984 6.39323 78.3984 5.50781C78.3984 4.55729 78.5775 3.70117 78.9355 2.93945C79.3001 2.17773 79.8145 1.59505 80.4785 1.19141C81.1426 0.78776 81.9173 0.585938 82.8027 0.585938C84.209 0.585938 85.3158 1.11328 86.123 2.16797C86.9368 3.21615 87.3438 4.64844 87.3438 6.46484V6.99219C87.3438 9.75911 86.7969 11.7806 85.7031 13.0566C84.6094 14.3262 82.959 14.9772 80.752 15.0098H80.4004V13.4863H80.7812C82.2721 13.4603 83.418 13.0729 84.2188 12.3242C85.0195 11.569 85.4557 10.3776 85.5273 8.75ZM82.7441 8.75C83.3496 8.75 83.9062 8.56445 84.4141 8.19336C84.9284 7.82227 85.3027 7.36328 85.5371 6.81641V6.09375C85.5371 4.90885 85.2799 3.94531 84.7656 3.20312C84.2513 2.46094 83.6003 2.08984 82.8125 2.08984C82.0182 2.08984 81.3802 2.39583 80.8984 3.00781C80.4167 3.61328 80.1758 4.41406 80.1758 5.41016C80.1758 6.38021 80.4069 7.18099 80.8691 7.8125C81.3379 8.4375 81.9629 8.75 82.7441 8.75ZM96.7578 8.75C96.3802 9.19922 95.9277 9.56055 95.4004 9.83398C94.8796 10.1074 94.3066 10.2441 93.6816 10.2441C92.8613 10.2441 92.1452 10.0423 91.5332 9.63867C90.9277 9.23503 90.459 8.66862 90.127 7.93945C89.7949 7.20378 89.6289 6.39323 89.6289 5.50781C89.6289 4.55729 89.8079 3.70117 90.166 2.93945C90.5306 2.17773 91.0449 1.59505 91.709 1.19141C92.373 0.78776 93.1478 0.585938 94.0332 0.585938C95.4395 0.585938 96.5462 1.11328 97.3535 2.16797C98.1673 3.21615 98.5742 4.64844 98.5742 6.46484V6.99219C98.5742 9.75911 98.0273 11.7806 96.9336 13.0566C95.8398 14.3262 94.1895 14.9772 91.9824 15.0098H91.6309V13.4863H92.0117C93.5026 13.4603 94.6484 13.0729 95.4492 12.3242C96.25 11.569 96.6862 10.3776 96.7578 8.75ZM93.9746 8.75C94.5801 8.75 95.1367 8.56445 95.6445 8.19336C96.1589 7.82227 96.5332 7.36328 96.7676 6.81641V6.09375C96.7676 4.90885 96.5104 3.94531 95.9961 3.20312C95.4818 2.46094 94.8307 2.08984 94.043 2.08984C93.2487 2.08984 92.6107 2.39583 92.1289 3.00781C91.6471 3.61328 91.4062 4.41406 91.4062 5.41016C91.4062 6.38021 91.6374 7.18099 92.0996 7.8125C92.5684 8.4375 93.1934 8.75 93.9746 8.75ZM112.949 8.75C112.572 9.19922 112.119 9.56055 111.592 9.83398C111.071 10.1074 110.498 10.2441 109.873 10.2441C109.053 10.2441 108.337 10.0423 107.725 9.63867C107.119 9.23503 106.65 8.66862 106.318 7.93945C105.986 7.20378 105.82 6.39323 105.82 5.50781C105.82 4.55729 105.999 3.70117 106.357 2.93945C106.722 2.17773 107.236 1.59505 107.9 1.19141C108.564 0.78776 109.339 0.585938 110.225 0.585938C111.631 0.585938 112.738 1.11328 113.545 2.16797C114.359 3.21615 114.766 4.64844 114.766 6.46484V6.99219C114.766 9.75911 114.219 11.7806 113.125 13.0566C112.031 14.3262 110.381 14.9772 108.174 15.0098H107.822V13.4863H108.203C109.694 13.4603 110.84 13.0729 111.641 12.3242C112.441 11.569 112.878 10.3776 112.949 8.75ZM110.166 8.75C110.771 8.75 111.328 8.56445 111.836 8.19336C112.35 7.82227 112.725 7.36328 112.959 6.81641V6.09375C112.959 4.90885 112.702 3.94531 112.188 3.20312C111.673 2.46094 111.022 2.08984 110.234 2.08984C109.44 2.08984 108.802 2.39583 108.32 3.00781C107.839 3.61328 107.598 4.41406 107.598 5.41016C107.598 6.38021 107.829 7.18099 108.291 7.8125C108.76 8.4375 109.385 8.75 110.166 8.75ZM124.18 8.75C123.802 9.19922 123.35 9.56055 122.822 9.83398C122.301 10.1074 121.729 10.2441 121.104 10.2441C120.283 10.2441 119.567 10.0423 118.955 9.63867C118.35 9.23503 117.881 8.66862 117.549 7.93945C117.217 7.20378 117.051 6.39323 117.051 5.50781C117.051 4.55729 117.23 3.70117 117.588 2.93945C117.952 2.17773 118.467 1.59505 119.131 1.19141C119.795 0.78776 120.57 0.585938 121.455 0.585938C122.861 0.585938 123.968 1.11328 124.775 2.16797C125.589 3.21615 125.996 4.64844 125.996 6.46484V6.99219C125.996 9.75911 125.449 11.7806 124.355 13.0566C123.262 14.3262 121.611 14.9772 119.404 15.0098H119.053V13.4863H119.434C120.924 13.4603 122.07 13.0729 122.871 12.3242C123.672 11.569 124.108 10.3776 124.18 8.75ZM121.396 8.75C122.002 8.75 122.559 8.56445 123.066 8.19336C123.581 7.82227 123.955 7.36328 124.189 6.81641V6.09375C124.189 4.90885 123.932 3.94531 123.418 3.20312C122.904 2.46094 122.253 2.08984 121.465 2.08984C120.671 2.08984 120.033 2.39583 119.551 3.00781C119.069 3.61328 118.828 4.41406 118.828 5.41016C118.828 6.38021 119.059 7.18099 119.521 7.8125C119.99 8.4375 120.615 8.75 121.396 8.75ZM140.371 8.75C139.993 9.19922 139.541 9.56055 139.014 9.83398C138.493 10.1074 137.92 10.2441 137.295 10.2441C136.475 10.2441 135.758 10.0423 135.146 9.63867C134.541 9.23503 134.072 8.66862 133.74 7.93945C133.408 7.20378 133.242 6.39323 133.242 5.50781C133.242 4.55729 133.421 3.70117 133.779 2.93945C134.144 2.17773 134.658 1.59505 135.322 1.19141C135.986 0.78776 136.761 0.585938 137.646 0.585938C139.053 0.585938 140.16 1.11328 140.967 2.16797C141.781 3.21615 142.188 4.64844 142.188 6.46484V6.99219C142.188 9.75911 141.641 11.7806 140.547 13.0566C139.453 14.3262 137.803 14.9772 135.596 15.0098H135.244V13.4863H135.625C137.116 13.4603 138.262 13.0729 139.062 12.3242C139.863 11.569 140.299 10.3776 140.371 8.75ZM137.588 8.75C138.193 8.75 138.75 8.56445 139.258 8.19336C139.772 7.82227 140.146 7.36328 140.381 6.81641V6.09375C140.381 4.90885 140.124 3.94531 139.609 3.20312C139.095 2.46094 138.444 2.08984 137.656 2.08984C136.862 2.08984 136.224 2.39583 135.742 3.00781C135.26 3.61328 135.02 4.41406 135.02 5.41016C135.02 6.38021 135.251 7.18099 135.713 7.8125C136.182 8.4375 136.807 8.75 137.588 8.75ZM151.602 8.75C151.224 9.19922 150.771 9.56055 150.244 9.83398C149.723 10.1074 149.15 10.2441 148.525 10.2441C147.705 10.2441 146.989 10.0423 146.377 9.63867C145.771 9.23503 145.303 8.66862 144.971 7.93945C144.639 7.20378 144.473 6.39323 144.473 5.50781C144.473 4.55729 144.652 3.70117 145.01 2.93945C145.374 2.17773 145.889 1.59505 146.553 1.19141C147.217 0.78776 147.992 0.585938 148.877 0.585938C150.283 0.585938 151.39 1.11328 152.197 2.16797C153.011 3.21615 153.418 4.64844 153.418 6.46484V6.99219C153.418 9.75911 152.871 11.7806 151.777 13.0566C150.684 14.3262 149.033 14.9772 146.826 15.0098H146.475V13.4863H146.855C148.346 13.4603 149.492 13.0729 150.293 12.3242C151.094 11.569 151.53 10.3776 151.602 8.75ZM148.818 8.75C149.424 8.75 149.98 8.56445 150.488 8.19336C151.003 7.82227 151.377 7.36328 151.611 6.81641V6.09375C151.611 4.90885 151.354 3.94531 150.84 3.20312C150.326 2.46094 149.674 2.08984 148.887 2.08984C148.092 2.08984 147.454 2.39583 146.973 3.00781C146.491 3.61328 146.25 4.41406 146.25 5.41016C146.25 6.38021 146.481 7.18099 146.943 7.8125C147.412 8.4375 148.037 8.75 148.818 8.75Z' />
            </svg>
          </a>
        </nav>
      </header>

      <main className='bgc-1'>
        <section className='greeting bgp-1'>
          <h1 className='section-title-main' id='YourTour'>
            Идеальные путешествия существуют
          </h1>
          <p className='section-subtitle-main'>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>
          <div className='buttons'>
            <button className='buttons__small'>Найти тур</button>
          </div>
        </section>

        <section className='choose-tour'>
          <h2 className='section-title' id='choose-tour'>
            Выбери свой тур
          </h2>
          <nav className='tabs'>
            <a className='tabs__link tabs__link_active' href='#Popular'>
              Популярные
            </a>
            <a className='tabs__link' href='#Copyright'>
              Авторские
            </a>
            <a className='tabs__link' href='#Hiking'>
              Походы
            </a>
            <a className='tabs__link' href='#Alloys'>
              Сплавы
            </a>
            <a className='tabs__link' href='#CyclingTrips'>
              Велопрогулки
            </a>
          </nav>

          <div className='choose-tour__container'>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-1 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-2 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-3 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-4 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-5 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
            <div className='card-tur'>
              <div className='card-tur__img card-tur__img_bgi-6 bgp-1'></div>
              <div className='card-tur__content'>
                <h3 className='card-tur__title'>Путешествие в горы</h3>
                <div className='card-tur__link'>
                  <a className='card-tur__link-item' href='#MoreDetailed'>
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='collect-tour'>
          <h2 className='section-title' id='collect-tour'>
            Собери свой тур
          </h2>
          <p className='section-subtitle'>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>

          <div className='collect-tour__container'>
            <form className='form-fill' action='#'>
              <div className='input-fields'>
                <div className='input-fields__name'>
                  <label
                    className='input-fields__name-label'
                    htmlFor='connectionName'
                  >
                    Имя
                  </label>
                  <input
                    className='input-fields__name-input'
                    name='name'
                    type='text'
                    id='connectionName'
                    placeholder='Введите Ваше имя'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className='input-fields__dropdown'>
                  <label
                    className='input-fields__dropdown-label'
                    htmlFor='connectionDropdown'
                  >
                    Направление
                  </label>
                  <div className='input-fields__dropdown-select'>
                    <select
                      className='input-fields__dropdown-select-item'
                      name='direction'
                      id='connectionDropdown'
                      required
                      defaultValue=''
                    >
                      <option value='' disabled>
                        Куда хотите ехать
                      </option>
                      <option value='Вариант 1'>Вариант 1</option>
                      <option value='Вариант 2'>Вариант 2</option>
                      <option value='Вариант 3'>Вариант 3</option>
                      <option value='Вариант 4'>Вариант 4</option>
                    </select>
                  </div>
                </div>

                <div className='input-fields__email'>
                  <label
                    className='input-fields__email-label'
                    htmlFor='connectionEmail'
                  >
                    Email
                  </label>
                  <input
                    className='input-fields__email-input'
                    name='email'
                    type='email'
                    id='connectionEmail'
                    placeholder='example@mail.com'
                    autoComplete='off'
                    required
                  />
                </div>

                <div className='input-fields__phone'>
                  <label
                    className='input-fields__phone-label'
                    htmlFor='connectionPhone'
                  >
                    Телефон
                  </label>
                  <input
                    className='input-fields__phone-input'
                    name='phone'
                    type='tel'
                    pattern='\+7\d{10}'
                    maxLength={12}
                    id='connectionPhone'
                    placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
                    autoComplete='off'
                    required
                  />
                </div>

                <div className='input-fields__dateFrom'>
                  <label
                    className='input-fields__dateFrom-label'
                    htmlFor='connectionDateFrom'
                  >
                    Дата от
                  </label>
                  <input
                    className='input-fields__dateFrom-input'
                    name='dateFrom'
                    type='date'
                    id='connectionDateFrom'
                    autoComplete='off'
                    required
                  />
                </div>

                <div className='input-fields__dateTo'>
                  <label
                    className='input-fields__dateTo-label'
                    htmlFor='connectionDateTo'
                  >
                    Дата до
                  </label>
                  <input
                    className='input-fields__dateTo-input'
                    name='dateTo'
                    type='date'
                    id='connectionDateTo'
                    autoComplete='off'
                    required
                  />
                </div>
              </div>

              <div className='comment-field'>
                <label
                  className='comment-field__label'
                  htmlFor='connectionComment'
                >
                  Комментарий
                </label>
                <textarea
                  className='comment-field__textarea'
                  name='comment'
                  id='connectionComment'
                  autoComplete='off'
                  maxLength={300}
                  required
                />
              </div>

              <fieldset className='radio-fields'>
                <legend className='legend-title'>Вам есть 18 лет?</legend>
                <div className='radio-group'>
                  <div className='radio-group__item'>
                    <input
                      className='radio-group__item-input'
                      type='radio'
                      name='clientAge'
                      id='connectionAgeYes'
                      value='Yes'
                    />
                    <label
                      className='radio-group__item-label'
                      htmlFor='connectionAgeYes'
                    >
                      Да
                    </label>
                  </div>
                  <div className='radio-group__item'>
                    <input
                      className='radio-group__item-input'
                      type='radio'
                      name='clientAge'
                      id='connectionAgeNo'
                      value='No'
                    />
                    <label
                      className='radio-group__item-label'
                      htmlFor='connectionAgeNo'
                    >
                      Нет
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className='agreement-field'>
                <input
                  className='agreement-field__input'
                  type='checkbox'
                  name='acceptAgreement'
                  id='connectionAgreement'
                />
                <label
                  className='agreement-field__customCheckbox'
                  htmlFor='connectionAgreement'
                ></label>
                <p className='agreement-field__text'>
                  Нажимая кнопку, я принимаю условия
                  <a className='agreement-field__link' href='#licenseAgreement'>
                    Лицензионного договора
                  </a>
                </p>
              </div>

              <div className='buttons-group'>
                <button className='buttons-group__find'>Найти тур</button>
                <button className='buttons-group__reset'>Сбросить</button>
              </div>
            </form>
          </div>
        </section>

        <section className='reviews'>
          <h2 className='section-title' id='reviews'>
            Отзывы наших путешественников
          </h2>
          <p className='section-subtitle'>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>

          <div className='reviews__container'>
            <div className='card-reviews'>
              <div className='card-reviews__wrapper-text'>
                <p className='card-reviews__text'>
                  Идейные соображения высшего порядка, а также рамки и место
                  обучения кадров обеспечивает широкому кругу (специалистов)
                  участие в формировании новых предложений. Идейные соображения
                  высшего порядка, а также начало повседневной работы по
                  формированию позиции позволяет оценить значение модели
                  развития.
                </p>
              </div>
              <div className='card-reviews__about-author'>
                <div className='card-reviews__author-data'>
                  <span className='card-reviews__author-name'>Мария</span>
                  <span className='card-reviews__author-tour-name'>
                    Тур: Вдали от дома{' '}
                  </span>
                </div>
                <div className='card-reviews__author-photo'>
                  <img src='./images/reviewPhoto1.png' alt='photo' />
                </div>
              </div>
            </div>
            <div className='card-reviews'>
              <div className='card-reviews__wrapper-text'>
                <p className='card-reviews__text'>
                  Равным образом постоянный количественный рост и сфера нашей
                  активности играет важную роль в формировании системы обучения
                  кадров, соответствует насущным потребностям.
                </p>
                <p className='card-reviews__text'>
                  Значимость этих проблем настолько очевидна, что дальнейшее
                  развитие различных форм деятельности обеспечивает широкому
                  кругу (специалистов) участие в формировании новых предложений.
                  Повседневная практика показывает, что реализация намеченных
                  плановых заданий в значительной степени обуславливает создание
                  модели развития.
                </p>
              </div>
              <div className='card-reviews__about-author'>
                <div className='card-reviews__author-data'>
                  <span className='card-reviews__author-name'>Павел</span>
                  <span className='card-reviews__author-tour-name'>
                    Тур: Путешествие в горы
                  </span>
                </div>
                <div className='card-reviews__author-photo'>
                  <img src='./images/reviewPhoto2.png' alt='photo' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='travel-photos'>
          <h2 className='section-title'>Фотографии путешествий</h2>
          <p className='section-subtitle'>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>

          <div className='travel-photos__wrapper'>
            <Image
              src={'/images/travelPhotos/travelPhoto1.png'}
              width={433}
              height={301}
              className='travel-photos__img1'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto2.png'}
              width={433}
              height={301}
              className='travel-photos__img1'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto3.png'}
              width={433}
              height={301}
              className='travel-photos__img1'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto4.png'}
              width={433}
              height={301}
              className='travel-photos__img1'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto5.png'}
              width={433}
              height={301}
              className='travel-photos__img2'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto6.png'}
              width={433}
              height={301}
              className='travel-photos__img2'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto7.png'}
              width={433}
              height={301}
              className='travel-photos__img2'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto8.png'}
              width={433}
              height={301}
              className='travel-photos__img2'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto9.png'}
              width={433}
              height={301}
              className='travel-photos__img2'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto10.png'}
              width={433}
              height={301}
              className='travel-photos__img3'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto11.png'}
              width={433}
              height={301}
              className='travel-photos__img3'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto12.png'}
              width={433}
              height={301}
              className='travel-photos__img3'
              alt='images'
              priority
            />
            <Image
              src={'/images/travelPhotos/travelPhoto13.png'}
              width={433}
              height={301}
              className='travel-photos__img3'
              alt='images'
              priority
            />
          </div>
        </section>

        <section className='stories'>
          <h2 className='section-title' id='stories'>
            Истории путешествий
          </h2>
          <p className='section-subtitle'>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </p>

          <div className='stories__container'>
            <div className='card-stories'>
              <div className='card-stories__img card-stories__bgi-1 bgp-1'></div>
              <div className='card-stories__content'>
                <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
                <div className='card-stories__wrapper-text'>
                  <p className='card-stories__description'>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений:
                  </p>
                  <ul className='card-stories__list-advantages'>
                    <li className='card-stories__list-advantages-item'>
                      вкусная еда
                    </li>
                    <li className='card-stories__list-advantages-item'>
                      дешевый транспорт
                    </li>
                    <li className='card-stories__list-advantages-item'>
                      красивый город.
                    </li>
                  </ul>
                </div>
                <div className='card-stories__link-group'>
                  <div className='card-stories__button-link'>
                    <a
                      className='card-stories__button-link-item'
                      href='#MoreDetailed'
                    >
                      Подробнее
                    </a>
                  </div>
                  <div className='card-stories__social-network-link'>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#instagram'
                    >
                      instagram
                    </a>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#facebook'
                    >
                      facebook
                    </a>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#YouTube'
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-stories'>
              <div className='card-stories__img card-stories__bgi-2 bgp-1'></div>
              <div className='card-stories__content'>
                <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
                <div className='card-stories__wrapper-text pb-1'>
                  <p className='card-stories__description'>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений
                  </p>
                </div>
                <div className='card-stories__link-group'>
                  <div className='card-stories__button-link'>
                    <a
                      className='card-stories__button-link-item'
                      href='#MoreDetailed'
                    >
                      Подробнее
                    </a>
                  </div>
                  <div className='card-stories__social-network-link'>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#instagram'
                    >
                      instagram
                    </a>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#ВКонтакте'
                    >
                      ВКонтакте
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-stories'>
              <div className='card-stories__img card-stories__bgi-3 bgp-1'></div>
              <div className='card-stories__content'>
                <h3 className='card-stories__title'>Автостопом в Стамбул</h3>
                <div className='card-stories__wrapper-text pb-1'>
                  <p className='card-stories__description'>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений
                  </p>
                </div>
                <div className='card-stories__link-group'>
                  <div className='card-stories__button-link'>
                    <a
                      className='card-stories__button-link-item'
                      href='#MoreDetailed'
                    >
                      Подробнее
                    </a>
                  </div>
                  <div className='card-stories__social-network-link'>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#instagram'
                    >
                      instagram
                    </a>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#facebook'
                    >
                      facebook
                    </a>
                    <a
                      className='card-stories__social-network-link-item'
                      href='#VKontakte'
                    >
                      ВКонтакте
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footers bgc-1'>
        <div className='footers-card'>
          <div className='footers-card__img bgp-1'></div>
          <div className='footers-card__content'>
            <h3 className='footers-card__title'>
              Пора в путешествие вместе с нами!
            </h3>
            <p className='footers-card__text'>
              Напиши на почту и узнай подробности на
              <a
                className='footers-card__email'
                href='mailto:yourtour@gmail.com'
              >
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className='footers-social-network'>
          <div className='footers-social-network__wrapper'>
            <div className='footers-social-network__title'>
              <span>Наши социальные сети</span>
            </div>
            <div className='footers-social-network__name'>
              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    d='M14.6672 14C14.6672 12.7114 15.7116 11.6665 17.0003 11.6665C18.2889 11.6665 19.3339 12.7114 19.3339 14C19.3339 15.2886 18.2889 16.3335 17.0003 16.3335C15.7116 16.3335 14.6672 15.2886 14.6672 14ZM13.4057 14C13.4057 15.9852 15.015 17.5944 17.0003 17.5944C18.9856 17.5944 20.5949 15.9852 20.5949 14C20.5949 12.0148 18.9856 10.4056 17.0003 10.4056C15.015 10.4056 13.4057 12.0148 13.4057 14ZM19.8971 10.2631C19.8971 10.7267 20.2731 11.1033 20.7373 11.1033C21.201 11.1033 21.5776 10.7267 21.5776 10.2631C21.5776 9.79943 21.2016 9.42342 20.7373 9.42342C20.2731 9.42342 19.8971 9.79943 19.8971 10.2631ZM14.1719 19.6978C13.4894 19.6667 13.1185 19.5531 12.8719 19.4569C12.5451 19.3297 12.3121 19.1782 12.0667 18.9334C11.8219 18.6885 11.6698 18.4556 11.5431 18.1288C11.447 17.8822 11.3333 17.5113 11.3022 16.8288C11.2683 16.091 11.2615 15.8693 11.2615 14C11.2615 12.1307 11.2689 11.9096 11.3022 11.1712C11.3333 10.4887 11.4476 10.1183 11.5431 9.87124C11.6703 9.54443 11.8219 9.31147 12.0667 9.06607C12.3116 8.82124 12.5445 8.66914 12.8719 8.54249C13.1185 8.44636 13.4894 8.33271 14.1719 8.30162C14.9098 8.26769 15.1315 8.2609 17.0003 8.2609C18.8697 8.2609 19.0908 8.26826 19.8292 8.30162C20.5117 8.33271 20.8821 8.44693 21.1292 8.54249C21.456 8.66914 21.689 8.82124 21.9344 9.06607C22.1792 9.3109 22.3308 9.54443 22.458 9.87124C22.5541 10.1178 22.6678 10.4887 22.6989 11.1712C22.7328 11.9096 22.7396 12.1307 22.7396 14C22.7396 15.8687 22.7328 16.0904 22.6989 16.8288C22.6678 17.5113 22.5536 17.8822 22.458 18.1288C22.3308 18.4556 22.1792 18.6885 21.9344 18.9334C21.6896 19.1782 21.456 19.3297 21.1292 19.4569C20.8827 19.5531 20.5117 19.6667 19.8292 19.6978C19.0913 19.7317 18.8697 19.7385 17.0003 19.7385C15.1315 19.7385 14.9098 19.7317 14.1719 19.6978ZM14.1142 7.04241C13.369 7.07633 12.8601 7.19451 12.415 7.36753C11.9548 7.5462 11.5646 7.78595 11.175 8.17496C10.786 8.56397 10.5462 8.95412 10.3675 9.41494C10.1945 9.85994 10.0763 10.3688 10.0424 11.1141C10.0079 11.8604 10 12.099 10 14C10 15.901 10.0079 16.1396 10.0424 16.8859C10.0763 17.6312 10.1945 18.1401 10.3675 18.5851C10.5462 19.0453 10.7854 19.436 11.175 19.825C11.564 20.2141 11.9542 20.4532 12.415 20.6325C12.8606 20.8055 13.369 20.9237 14.1142 20.9576C14.8612 20.9915 15.0992 21 17.0003 21C18.9019 21 19.1399 20.9921 19.8863 20.9576C20.6316 20.9237 21.1405 20.8055 21.5855 20.6325C22.0458 20.4532 22.436 20.2141 22.8256 19.825C23.2146 19.436 23.4538 19.0453 23.633 18.5851C23.8061 18.1401 23.9248 17.6312 23.9582 16.8859C23.9921 16.139 24 15.901 24 14C24 12.099 23.9921 11.8604 23.9582 11.1141C23.9242 10.3688 23.8061 9.85994 23.633 9.41494C23.4538 8.95468 23.2146 8.56454 22.8256 8.17496C22.4365 7.78595 22.0458 7.5462 21.5861 7.36753C21.1405 7.19451 20.6316 7.07577 19.8869 7.04241C19.1405 7.00848 18.9019 7 17.0008 7C15.0992 7 14.8612 7.00792 14.1142 7.04241Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Instagram'>
                  instagram
                </a>
              </div>

              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    d='M20.9881 5H18.2711C16.6587 5 14.8653 5.67811 14.8653 8.01522C14.8732 8.82956 14.8653 9.60945 14.8653 10.4872H13V13.4553H14.923V22H18.4567V13.3989H20.789L21 10.4788H18.3958C18.3958 10.4788 18.4016 9.17988 18.3958 8.80265C18.3958 7.87908 19.3568 7.93197 19.4146 7.93197C19.8719 7.93197 20.7612 7.9333 20.9894 7.93197V5H20.9881Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Facebook'>
                  facebook
                </a>
              </div>

              <div className='footers-social-network__inner-wrap'>
                <svg
                  className='footers-social-network__icon'
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M23.5395 10.8053C23.6802 10.3316 23.5395 10 22.883 10H20.6946C20.1318 10 19.8817 10.3 19.741 10.6316C19.741 10.6316 18.6312 13.3789 17.0524 15.1474C16.5366 15.6684 16.3177 15.8263 16.0363 15.8263C15.8957 15.8263 15.6924 15.6684 15.6924 15.1947V10.8053C15.6924 10.2368 15.5361 10 15.0672 10H11.6282C11.2843 10 11.0655 10.2684 11.0655 10.5053C11.0655 11.0421 11.8471 11.1684 11.9409 12.6526V15.9053C11.9409 16.6158 11.8158 16.7421 11.5344 16.7421C10.7998 16.7421 8.98648 13.9947 7.92353 10.8368C7.70469 10.2526 7.50148 10 6.93874 10H4.75032C4.12505 10 4 10.3 4 10.6316C4 11.2158 4.73469 14.1211 7.45459 17.9579C9.26785 20.5789 11.8158 22 14.1293 22C15.5205 22 15.6924 21.6842 15.6924 21.1474V19.1579C15.6924 18.5263 15.8175 18.4 16.2708 18.4C16.5991 18.4 17.1462 18.5579 18.4436 19.8211C19.9286 21.3211 20.1787 22 21.0072 22H23.1956C23.8209 22 24.1335 21.6842 23.9459 21.0684C23.7427 20.4526 23.0393 19.5526 22.1014 18.4789C21.5856 17.8632 20.8196 17.2158 20.6008 16.8842C20.2725 16.4579 20.3663 16.2684 20.6008 15.9053C20.6008 15.8895 23.2738 12.1 23.5395 10.8053Z'
                    fill='#A6A6A6'
                  />
                </svg>
                <a className='footers-social-network__link' href='#Vkontakte'>
                  vkontakte
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
