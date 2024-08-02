import React from "react";
import { Avatar } from "../../components/Avatar";
import { FriendList } from "../../components/FriendList";
import { NavigationPill } from "../../components/NavigationPill";
import { PostCardWithLike } from "../../components/PostCardWithLike";
import { Search } from "../../components/Search";
import { Text } from "../../components/Text";
import { IconOutlinedSuggestedSymbol } from "../../icons/IconOutlinedSuggestedSymbol";
import "./style.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="top-bar-group">
        <div className="overlap-group-2">
          <header className="header">
            <img className="block" alt="Block" src="https://c.animaapp.com/MBMINqBD/img/block-2.svg" />
            <div className="text-wrapper-6">AceBook</div>
            <div className="navigation-pill-list">
              <NavigationPill className="navigation-pill-instance" label="Home" state="active" />
              <NavigationPill className="navigation-pill-instance" label="Feed" state="default" />
              <NavigationPill className="navigation-pill-instance" label="About us" state="default" />
            </div>
            <div className="header-auth">
              <div className="avatar-2" />
            </div>
          </header>
          <Search className="search-instance" />
          <div className="new-post-button">
            <IconOutlinedSuggestedSymbol className="icon-outlined" color="#D9D9D9" />
            <button className="button-3">New Post</button>
          </div>
        </div>
      </div>
      <div className="hero-basic">
        <div className="text-content-title">
          <div className="avatar-block-2">
            <Avatar className="design-component-instance-node" shape="square" size="large" type="image" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Joanne Lumely</div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="item" />
        <div className="item-last" />
      </div>
      <div className="card-grid-content">
        <div className="panel-image-content">
          <div className="group">
            <div className="text-content-flow">
              <div className="text-content-heading">
                <div className="heading">Joanne’s Bio</div>
              </div>
              <Text
                className="text-instance"
                divClassName="text-3"
                text={
                  <>
                    Hi, I&#39;m Joanne! I&#39;m a passionate traveler, avid reader, and dedicated marketing
                    professional. I was born and raised in Seattle, Washington, where my love for exploring new places
                    and cultures began. I have a degree in Marketing from the University of Washington, where I
                    graduated with honors.
                    <br />
                    Currently, I work as a Senior Marketing Manager at a leading tech company in Seattle. I&#39;m known
                    for my innovative strategies and my ability to connect with diverse audiences. When I&#39;m not
                    working, you&#39;ll often find me hiking in the beautiful Pacific Northwest, experimenting with new
                    recipes, or volunteering at local animal shelters.
                    <br />
                    My friends describe me as enthusiastic, caring, and adventurous. I always bring a positive vibe to
                    any situation. Whether I&#39;m planning my next international trip or enjoying a quiet evening with
                    a good book, I strive to live life to the fullest and inspire those around me to do the same.
                  </>
                }
              />
            </div>
          </div>
        </div>
        <FriendList className="friend-list-instance" />
        <div className="heading-wrapper">
          <div className="heading">Joanne’s Recent Posts</div>
        </div>
        <div className="cards">
          <PostCardWithLike className="post-card-with-like-button" />
          <PostCardWithLike className="post-card-with-like-button" />
          <PostCardWithLike className="post-card-with-like-button" />
          <PostCardWithLike className="post-card-with-like-button" />
          <PostCardWithLike className="post-card-with-like-button" />
          <PostCardWithLike className="post-card-with-like-button" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
