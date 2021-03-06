import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSignature } from '../../ReduxFiles/actions';
var moment = require('moment');

export const SignaturePad = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (function () {
      window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimaitonFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();

      var canvas = document.getElementById("sig-canvas");
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#222222";
      ctx.lineWidth = 4;

      var drawing = false;
      var mousePos = {
        x: 0,
        y: 0
      };
      var lastPos = mousePos;

      canvas.addEventListener("mousedown", function (e) {
        drawing = true;
        lastPos = getMousePos(canvas, e);
      }, false);

      canvas.addEventListener("mouseup", function (e) {
        drawing = false;
      }, false);

      canvas.addEventListener("mousemove", function (e) {
        mousePos = getMousePos(canvas, e);
      }, false);

      // Add touch event support for mobile
      canvas.addEventListener("touchstart", function (e) {

      }, false);

      canvas.addEventListener("touchmove", function (e) {
        var touch = e.touches[0];
        var me = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(me);
      }, false);

      canvas.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var me = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(me);
      }, false);

      canvas.addEventListener("touchend", function (e) {
        var me = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(me);
      }, false);

      function getMousePos(canvasDom, mouseEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: mouseEvent.clientX - rect.left,
          y: mouseEvent.clientY - rect.top
        }
      }

      function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: touchEvent.touches[0].clientX - rect.left,
          y: touchEvent.touches[0].clientY - rect.top
        }
      }

      function renderCanvas() {
        if (drawing) {
          ctx.moveTo(lastPos.x, lastPos.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
          lastPos = mousePos;
        }
      }

      // Prevent scrolling when touching the canvas
      document.body.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      }, false);
      document.body.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      }, false);
      document.body.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      }, false);

      (function drawLoop() {
        window.requestAnimFrame(drawLoop);
        renderCanvas();
      })();

      // Set up the UI

      var clearBtn = document.getElementById("sig-clearBtn");
      var submitBtn = document.getElementById("sig-submitBtn");
      clearBtn.addEventListener("click", function (e) {
        canvas.width = canvas.width;
        dispatch(updateSignature(''));
        //   sigText.innerHTML = "Data URL for your signature will go here!";
        //   sigImage.setAttribute("src", "");
      }, false);
      submitBtn.addEventListener("click", function (e) {
        var dataUrl = canvas.toDataURL();
        dispatch(updateSignature(dataUrl));
        //   sigText.innerHTML = dataUrl;
        //   sigImage.setAttribute("src", dataUrl);
      }, false);

    })();
  }, []);
  return (
    <div className="neo_card margin_t_20">
      <canvas id="sig-canvas" width="620" height="160">
        Your browser does not Suppport this feature
		 		</canvas>
      <div className="d-flex f-cloumn justify-content-center">
        <div className="col-md-12">
          <small>Sign in the canvas and save your signature!</small>
        </div>
        <div className="col-md-12 d-flex f-cloumn align-items-center">
          <button className="red margin-10" id="sig-submitBtn">Save Signature</button>
          <button className="grey margin-10" id="sig-clearBtn">Clear Signature</button>
        </div>
      </div>
    </div>
  );
}