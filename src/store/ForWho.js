import axios from 'axios'

const ForWho = {
  namespaced: true,
    state: {
        forWho: [
          {
            title: 'Стартапы',
            paragraph: 'протестировать MVP и понять экономику за привлеченные конверсии.'
          },
          {
            title: 'Крупный и корпоративный бизнес',
            paragraph: ' информационная поддержка ваших целевых активностей и развитие HR направления. Трансляция внутренних ценностей компании и создание канала коммуникации с клиентской базой. '
          },    
          {
            title: 'Digital-агентства',
            paragraph: 'пополнить производственный ресурс дополнительными специалистами. Расширить спектр предоставляемых клиенту услуг. Наладить процесс обмена опытом между специалистами вашего и нашего агентства.'
          },

            {
              title: 'Малый и средний бизнес',
              paragraph: 'делегировать процессы по маркетингу и контенту, чтобы освободить время и заниматься масштабированием. '
            },
       
        ],
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }

}

export default ForWho;
