<section class="testimonials">
  <div class="container">
    <h2 class="testimonial-title">Reviews</h2>

    <div class="testimonial-wrapper">
      {% for testimonial in section.blocks %}
        <div class="testimonial">
          <div class="stars">
            {% for i in (1..testimonial.settings.stars) %}
              <span class="star">&#9733;</span>
            {% endfor %}
          </div>
          <h3 class="review-title">{{ testimonial.settings.title }}</h3>
          <p class="review-description">{{ testimonial.settings.description }}</p>
          <p class="review-author">— {{ testimonial.settings.author }}</p>
          <p class="review-date">{{ testimonial.settings.date }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<style>
  .testimonials {
    background-color: #f8f8f8;
    padding: 50px;
    text-align: center;
  }

  .testimonial-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .testimonial-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px 0;
  }

  .testimonial {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .stars {
    color: #FFD700;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .review-title {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }

  .review-description {
    font-size: 16px;
    color: #666;
    margin: 10px 0;
  }

  .review-author {
    font-weight: bold;
    color: #222;
  }

  .review-date {
    font-size: 14px;
    color: #777;
  }

  /* Rregullime për versionet mobile */
  @media (max-width: 768px) {
    .testimonial-wrapper {
      justify-content: center;
    }

    .testimonial {
      width: 100%;
    }
  }
</style>

{% schema %}
{
  "name": "Testimonials",
  "settings": [],
  "blocks": [
    {
      "type": "review",
      "name": "Review",
      "settings": [
        {
          "type": "range",
          "id": "stars",
          "label": "Numri i yjeve",
          "min": 1,
          "max": 5,
          "step": 1,
          "default": 5
        },
        {
          "type": "text",
          "id": "title",
          "label": "Titulli i Review"
        },
        {
          "type": "textarea",
          "id": "description",
          "label": "Përshkrimi"
        },
        {
          "type": "text",
          "id": "author",
          "label": "Emri i Autorit"
        },
        {
          "type": "text",
          "id": "date",
          "label": "Data"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Testimonials",
      "blocks": [
        {
          "type": "review"
        }
      ]
    }
  ]
}
{% endschema %}
