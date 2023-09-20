import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { createId, formatDate } from '@/services/methods'
import * as firebase from 'firebase/storage'


export const useAuto = () => {

  const autoList = ref([])

  const newAuto = ref({
    id: createId(),
    brand: '',
    price: '',
    saled: '',
    city: '',
    carcase: '',
    volume: '',
    color: '',
    gear: '',
    year: '',
    travel: 0,
    image: null,
    saled: false
})

  const loading = ref({
    autoList: false,
    newAuto: false,
  })

  const auto = ref(null)

  const autoListRemake = computed(() => {
    const _autoListRemake = autoList.value.map((auto) => {
      auto.price = `${parseInt(auto.price)} KZT`
      auto.volume = `${auto.volume} л`
      auto.travel = `${auto.travel} км`
      auto.year = formatDate(auto.year)
      auto.age = `${new Date().getFullYear() - auto.year}г`
      auto.color = `#${auto.color}`
      return auto
    })
    return _autoListRemake || []
  })
 
  async function createAuto() {
    loading.value.newAuto = true
    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(async() => {
        getAutoList()
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }

  function clear() {
    const newAuto = {
      id: '',
      brand: '',
      price: '',
      saled: '',
      city: '',
      carcase: '',
      volume: '',
      color: '',
      gear: '',
      year: '',
      travel: 0,
      image: null,
      saled: false
    }
    autoList.value = []
    auto.value = null
  } 

  async function getAuto(id) {
    loading.value.auto = true
    try {
      const querySnapshot = await getDocs(collection(db,'autos'))
      querySnapshot.forEach((doc) =>{
        if(doc.data().id === id){
          auto.value = doc.data()
        }
      })
    } catch (e) {
      console.error('Error: ', e);
    } finally {
      loading.value.auto = false
    }
  }

  async function uploadImage(file) {
      console.log(file)
      const storage = getStorage()
      console.log(storage)
      const storageRef = firebase.ref(storage, 'autos/' + file.name)
      console.log(storageRef)

      uploadBytes(storageRef, file)
        .then(() => {
          console.log('Файл успешно загружен!')
  
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              newAuto.value.image = downloadURL
              console.log(downloadURL);
            })
            .catch((error) => {
              console.error('Ошибка получения ссылки на загруженный файл:', error)
            })
        })
        .catch((error) => {
          console.error('Ошибка загрузки файла:', error)
        })
    }

  return {
    createAuto,
    getAutoList,
    autoListRemake,
    loading,
    newAuto,
    clear,
    uploadImage,
    getAuto,
    auto,
  }
}