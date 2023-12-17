import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba15ВакантДолжнLForm from './forms/i-i-s-proba15-вакант-должн-l';
import IISProba15ДолжнСотрLForm from './forms/i-i-s-proba15-должн-сотр-l';
import IISProba15ОрганизацияLForm from './forms/i-i-s-proba15-организация-l';
import IISProba15ПланирСобесLForm from './forms/i-i-s-proba15-планир-собес-l';
import IISProba15РегРезультLForm from './forms/i-i-s-proba15-рег-результ-l';
import IISProba15РегистАнкетыLForm from './forms/i-i-s-proba15-регист-анкеты-l';
import IISProba15СотрудникиLForm from './forms/i-i-s-proba15-сотрудники-l';
import IISProba15ВакантДолжнEForm from './forms/i-i-s-proba15-вакант-должн-e';
import IISProba15ДолжнСотрEForm from './forms/i-i-s-proba15-должн-сотр-e';
import IISProba15ОрганизацияEForm from './forms/i-i-s-proba15-организация-e';
import IISProba15ПланирСобесEForm from './forms/i-i-s-proba15-планир-собес-e';
import IISProba15РегРезультEForm from './forms/i-i-s-proba15-рег-результ-e';
import IISProba15РегистАнкетыEForm from './forms/i-i-s-proba15-регист-анкеты-e';
import IISProba15СотрудникиEForm from './forms/i-i-s-proba15-сотрудники-e';
import IISProba15ВакантДолжнModel from './models/i-i-s-proba15-вакант-должн';
import IISProba15ДолжнСотрModel from './models/i-i-s-proba15-должн-сотр';
import IISProba15ОрганизацияModel from './models/i-i-s-proba15-организация';
import IISProba15ПланирСобесModel from './models/i-i-s-proba15-планир-собес';
import IISProba15РегРезультModel from './models/i-i-s-proba15-рег-результ';
import IISProba15РегистАнкетыModel from './models/i-i-s-proba15-регист-анкеты';
import IISProba15СотрудникиModel from './models/i-i-s-proba15-сотрудники';
import IISProba15ТЧРегРезультModel from './models/i-i-s-proba15-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba15-вакант-должн': IISProba15ВакантДолжнModel,
    'i-i-s-proba15-должн-сотр': IISProba15ДолжнСотрModel,
    'i-i-s-proba15-организация': IISProba15ОрганизацияModel,
    'i-i-s-proba15-планир-собес': IISProba15ПланирСобесModel,
    'i-i-s-proba15-рег-результ': IISProba15РегРезультModel,
    'i-i-s-proba15-регист-анкеты': IISProba15РегистАнкетыModel,
    'i-i-s-proba15-сотрудники': IISProba15СотрудникиModel,
    'i-i-s-proba15-т-ч-рег-результ': IISProba15ТЧРегРезультModel
  },

  'application-name': 'Menu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Menu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Menu',
          title: 'Menu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-proba15-вакант-должн-l': {
            caption: 'Вакантная должность',
            title: ''
          },
          'i-i-s-proba15-организация-l': {
            caption: 'Организация',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proba15-рег-результ-l': {
            caption: 'Регистрация результатов собеседования',
            title: 'Регистрация результатов собеседования'
          },
          'i-i-s-proba15-планир-собес-l': {
            caption: 'Планирование собеседования',
            title: 'Планирование собеседования'
          },
          'i-i-s-proba15-регист-анкеты-l': {
            caption: 'Регистрация анкеты кандидата',
            title: 'Регистрация анкеты кандидата'
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-proba15-должн-сотр-l': {
            caption: 'Должность сотрудника',
            title: 'Должность сотрудника'
          },
          'i-i-s-proba15-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba15-вакант-должн-l': IISProba15ВакантДолжнLForm,
    'i-i-s-proba15-должн-сотр-l': IISProba15ДолжнСотрLForm,
    'i-i-s-proba15-организация-l': IISProba15ОрганизацияLForm,
    'i-i-s-proba15-планир-собес-l': IISProba15ПланирСобесLForm,
    'i-i-s-proba15-рег-результ-l': IISProba15РегРезультLForm,
    'i-i-s-proba15-регист-анкеты-l': IISProba15РегистАнкетыLForm,
    'i-i-s-proba15-сотрудники-l': IISProba15СотрудникиLForm,
    'i-i-s-proba15-вакант-должн-e': IISProba15ВакантДолжнEForm,
    'i-i-s-proba15-должн-сотр-e': IISProba15ДолжнСотрEForm,
    'i-i-s-proba15-организация-e': IISProba15ОрганизацияEForm,
    'i-i-s-proba15-планир-собес-e': IISProba15ПланирСобесEForm,
    'i-i-s-proba15-рег-результ-e': IISProba15РегРезультEForm,
    'i-i-s-proba15-регист-анкеты-e': IISProba15РегистАнкетыEForm,
    'i-i-s-proba15-сотрудники-e': IISProba15СотрудникиEForm
  },

});

export default translations;
