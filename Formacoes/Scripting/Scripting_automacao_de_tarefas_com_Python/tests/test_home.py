from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_home(browser: webdriver) -> None:
    url = 'http://127.0.0.1:8081'
    browser.get(url)
    wait = WebDriverWait(browser, 9)
    wait.until(EC.presence_of_element_located((By.ID, 'react-entry-point')))
    assert browser.title == 'Dash'
    print('Teste da página inicial concluído com sucesso!')
