<?php
/*
 Template name: Главная страница
 */
get_header(); ?>

<?php include get_template_directory() . '/inc/page-main/hero.php'; ?>
<?php include get_template_directory() . '/inc/page-main/featured.php'; ?>
<?php include get_template_directory() . '/inc/page-main/partners.php'; ?>
<?php include get_template_directory() . '/inc/page-main/blog.php'; ?>
<?php include get_template_directory() . '/inc/page-main/callback.php'; ?>

<?php get_footer(); ?>