
const generateMovies = (count, category) => {
    return Array.from({ length: count }).map((_, i) => {
    
        const seed = Math.floor(Math.random() * 1000) + 1;
      
        return {
            id: `${category}-${i}`,
            title: `Movie ${category} ${i + 1}`,
            backdropUrl: `https://picsum.photos/seed/${category}${seed}/500/281`,
            posterUrl: `https://picsum.photos/seed/${category}${seed}_poster/300/450`
        };
    });
};

const categories = [
    { id: 'trending', title: 'Trending Now', large: true, data: generateMovies(10, 'trend') },
    { id: 'topRated', title: 'Top Rated', large: false, data: generateMovies(15, 'top') },
    { id: 'action', title: 'Action Movies', large: false, data: generateMovies(15, 'action') },
    { id: 'comedy', title: 'Comedies', large: false, data: generateMovies(15, 'comedy') },
    { id: 'horror', title: 'Horror Movies', large: false, data: generateMovies(15, 'horror') }
];


const heroMovie = {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    
    backdropUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
};

document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundImage = `url("${heroMovie.backdropUrl}")`;
    document.getElementById('hero-title').textContent = heroMovie.title;
    document.getElementById('hero-desc').textContent = heroMovie.description;

    const mainContent = document.getElementById('main-content');
    
    categories.forEach(category => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        const title = document.createElement('h2');
        title.classList.add('row-title');
        title.textContent = category.title;
        rowDiv.appendChild(title);

        const postersDiv = document.createElement('div');
        postersDiv.classList.add('row-posters');

        category.data.forEach(movie => {
            const img = document.createElement('img');
            img.src = category.large ? movie.posterUrl : movie.backdropUrl;
            img.alt = movie.title;
            img.classList.add('poster');
            if (category.large) {
                img.classList.add('poster-large');
            }
            img.onerror = function() {
                this.src = 'https://via.placeholder.com/500x281/141414/ffffff?text=Video+Unavailable';
            };
            postersDiv.appendChild(img);
        });

        rowDiv.appendChild(postersDiv);
        mainContent.appendChild(rowDiv);
    });
});
