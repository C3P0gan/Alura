import os

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_path = f"{os.getcwd()}/chrome-linux64/chrome"

chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = chrome_path
driver = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(driver, 9)

url = 'http://127.0.0.1:8080'

# teste da página inicial
driver.get(url)
wait.until(EC.presence_of_element_located((By.ID, 'react-entry-point')))
assert 'Dash' in driver.title
assert 'pagina inicial' in driver.page_source
print('Teste da página inicial com sucesso!')

# teste da página do formulário
driver.get(url + '/formulario')
wait.until(EC.presence_of_element_located((By.ID, 'react-entry-point')))
assert 'Dash' in driver.title
assert 'Formulário' in driver.page_source
print('Teste da página de formulário com sucesso!')

# teste da página de gráficos
driver.get(url + '/graficos')
wait.until(EC.presence_of_element_located((By.ID, 'react-entry-point')))
assert 'Dash' in driver.title
assert 'Gráficos' in driver.page_source
print('Teste da página de gráficos com sucesso!')

driver.quit()
