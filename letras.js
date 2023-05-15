(function () {
    const annotate = RoughNotation.annotate;
    const annotationGroup = RoughNotation.annotationGroup;
    const $ = (t) => document.querySelector(t);
    {
      // Resaltar "miParrafo"
      const paragraph1 = $('#miParrafo');
      const textSpan1 = document.createElement('span');
      textSpan1.innerText = paragraph1.innerText;
      paragraph1.innerHTML = '';
      paragraph1.appendChild(textSpan1);
  
      const a1 = annotate(textSpan1, { type: 'highlight', color: '#9ED1FF', multiline: false, padding: [0, 2], iterations: 1 });
      a1.show();
  
      // Resaltar "miParrafo2"
      const paragraph2 = $('#miParrafo2');
      const textSpan2 = document.createElement('span');
      textSpan2.innerText = paragraph2.innerText;
      paragraph2.innerHTML = '';
      paragraph2.appendChild(textSpan2);
  
      const a2 = annotate(textSpan2, { type: 'highlight', color: '#90EE90', multiline: false, padding: [0, 2], iterations: 1 });
      a2.show();

      const paragraph3 = $('#miParrafo3');
      const textSpan3 = document.createElement('span');
      textSpan3.innerText = paragraph3.innerText;
      paragraph3.innerHTML = '';
      paragraph3.appendChild(textSpan3);
  
      const a3 = annotate(textSpan3, { type: 'highlight', color: '#E7F169', multiline: false, padding: [0, 2], iterations: 2  });
      a3.show();
    }
  })();
  