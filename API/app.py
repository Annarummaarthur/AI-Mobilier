from flask import Flask, jsonify, request
import requests
from bs4 import BeautifulSoup
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/scrape', methods=['POST'])
def scrape_links():
    url = 'https://www.location-etudiant.fr/logement-etudiant/Bordeaux-33063.html'
    scraped_data = []

    while True:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        residence_divs = soup.find_all('div', class_='div-residence__main__title')
        prix_divs = soup.find_all('div', class_='div-residence_right__1')

        for i in range(min(len(residence_divs), len(prix_divs))):
            residence_div = residence_divs[i]
            prix_div = prix_divs[i]

            link = residence_div.find('a')
            href = link.get('href')
            text = link.text.strip()  

            prix_span = prix_div.find('span')
            prix_text = re.sub(r'/mois', '', prix_span.text.strip())
            prix_text = re.sub(r'€', '', prix_text.strip())
            prix_text = prix_text.replace(',', '')
            prix_text = prix_text.replace(' ', '')

            scraped_data.append({'titre': text, 'lien': "https://www.location-etudiant.fr" + href, 'prix': prix_text})

        pagination_div = soup.find('div', class_='pagination')

        if pagination_div:
            next_page_link = pagination_div.find('a', rel='next')

            if next_page_link:
                url = next_page_link.get('href')
            else:
                break
        else:
            break


    # Retourner les liens et les prix associés au format JSON
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True)
