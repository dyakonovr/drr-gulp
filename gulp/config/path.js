// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    resources: `${buildFolder}/resources/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/*.scss`,
    js: `${srcFolder}/js/*.js`,
    svg: `${srcFolder}/img/svg/*.svg`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    resources: `${srcFolder}/resources/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    resources: `${buildFolder}/resources/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: `./dist`,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}
