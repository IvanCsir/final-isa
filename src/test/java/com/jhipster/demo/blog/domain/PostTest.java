package com.jhipster.demo.blog.domain;

import static com.jhipster.demo.blog.domain.BlogTestSamples.*;
import static com.jhipster.demo.blog.domain.PostTestSamples.*;
import static com.jhipster.demo.blog.domain.TagTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import com.jhipster.demo.blog.web.rest.TestUtil;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PostTest {

    //Test de unidad
    private Post post;

    @BeforeEach
    public void init() {
        post = new Post();
        post.setTitle("Prueba");
        post.setContent("Contenido de prueba");
        String fechaStr = "2023-12-12T05:00:00Z";
        Instant fecha = Instant.parse(fechaStr);
        post.setDate(fecha);
    }

    //Compruebo que los atributos sean los seteados
    @Test
    public void testPost() {
        assertEquals("Prueba", post.getTitle());
        assertEquals("Contenido de prueba", post.getContent());
        String fechaStr = "2023-12-12T05:00:00Z";
        Instant fecha = Instant.parse(fechaStr);
        assertEquals(fecha, post.getDate());
    }

    @Test
    public void testFecha() {
        Instant fechaAhora = Instant.now();
        assertFalse(fechaAhora.equals(post.getDate()));
    }

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Post.class);
        Post post1 = getPostSample1();
        Post post2 = new Post();
        assertThat(post1).isNotEqualTo(post2);

        post2.setId(post1.getId());
        assertThat(post1).isEqualTo(post2);

        post2 = getPostSample2();
        assertThat(post1).isNotEqualTo(post2);
    }

    @Test
    void blogTest() {
        Post post = getPostRandomSampleGenerator();
        Blog blogBack = getBlogRandomSampleGenerator();

        post.setBlog(blogBack);
        assertThat(post.getBlog()).isEqualTo(blogBack);

        post.blog(null);
        assertThat(post.getBlog()).isNull();
    }

    @Test
    void tagTest() {
        Post post = getPostRandomSampleGenerator();
        Tag tagBack = getTagRandomSampleGenerator();

        post.addTag(tagBack);
        assertThat(post.getTags()).containsOnly(tagBack);

        post.removeTag(tagBack);
        assertThat(post.getTags()).doesNotContain(tagBack);

        post.tags(new HashSet<>(Set.of(tagBack)));
        assertThat(post.getTags()).containsOnly(tagBack);

        post.setTags(new HashSet<>());
        assertThat(post.getTags()).doesNotContain(tagBack);
    }
}
